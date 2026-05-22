// ============================================================
// สำนักพิมพ์พระสูตรมหายาน — Modular Reader
// แต่ละบทโหลดจาก JSON แยก ไม่ต้องแก้ไขทั้งไฟล์
// ============================================================

// ── หน้า index: แสดงรายการพระสูตร ──────────────────────────

const LOCAL_SUTRAS_FALLBACK = [
  {
    id: 40,
    title_thai: 'คัณฑวยูหะสูตร',
    title_sanskrit: 'Gaṇḍavyūha sūtram',
    priority: 1,
    status: 'in_progress',
    description: 'การเดินทางแสวงบุญของสุธนกุมาร เยี่ยมครู ๕๓ ท่าน',
    chapters_count: 56,
    chapters: Array.from({ length: 56 }, (_, i) => ({
      id: i + 1,
      title_thai: `บทที่ ${i + 1}`,
      title_sanskrit: '',
      status: i < 25 ? 'completed' : 'pending'
    }))
  }
];

function getSutrasData() {
  return (typeof SUTRAS_DATA !== 'undefined' && Array.isArray(SUTRAS_DATA))
    ? SUTRAS_DATA
    : LOCAL_SUTRAS_FALLBACK;
}

function loadSutraList() {
  const container = document.getElementById('sutra-list');
  if (!container) return;
  const sorted = [...getSutrasData()].sort((a, b) => a.priority - b.priority);
  container.innerHTML = sorted.map(s => createSutraCard(s)).join('');
  container.querySelectorAll('.sutra-card').forEach(card => {
    card.addEventListener('click', () => openSutraReader(card.dataset.sutraId));
  });
}

function createSutraCard(s) {
  const st = { completed: 'แปลแล้ว', in_progress: 'กำลังแปล', pending: 'รอดำเนินการ' };
  const pct = s.chapters_count > 0
    ? Math.round(s.chapters.filter(c => c.status === 'completed').length / s.chapters_count * 100) : 0;
  return `
    <div class="sutra-card ${s.priority <= 3 ? 'priority-high' : 'priority-medium'}"
         data-sutra-id="${s.id}">
      <div class="sutra-number">พระสูตรที่ ${s.priority}</div>
      <h3 class="sutra-title-thai">${s.title_thai}</h3>
      <p class="sutra-title-sanskrit">${s.title_sanskrit}</p>
      <p class="sutra-description">${s.description}</p>
      <div class="sutra-meta">
        <span>${s.chapters_count > 0 ? `${s.chapters_count} บท` : 'เร็วๆ นี้'} • ${st[s.status] || s.status}</span>
        <button class="read-btn">อ่าน</button>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;
}

function updateStats() {
  const el = id => document.getElementById(id);
  const sutras = getSutrasData();
  const total = sutras.length;
  const tot = sutras.reduce((s, x) => s + x.chapters_count, 0);
  const done = sutras.filter(x => x.status === 'completed').length;
  const wip = sutras.filter(x => x.status === 'in_progress').length;
  if (el('total-sutras')) el('total-sutras').textContent = total || '—';
  if (el('total-chapters')) el('total-chapters').textContent = tot || '—';
  if (el('completed')) el('completed').textContent = done;
  if (el('in-progress')) el('in-progress').textContent = wip;
}

function setupNavigation() {
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


// ── หน้า reader: lazy-load บท ─────────────────────────────

async function initReader() {
  const params = new URLSearchParams(window.location.search);
  const sutraId = params.get('sutra') || '40';
  const chapterId = params.get('chapter') || '1';

  const sutra = getSutrasData().find(s => String(s.id) === String(sutraId));
  if (!sutra) { showError('ไม่พบพระสูตรที่ต้องการ'); return; }

  // Header
  document.getElementById('reader-header').innerHTML = `
    <h1>${sutra.title_thai}</h1>
    <p style="color:var(--text-muted);font-style:italic">${sutra.title_sanskrit}</p>`;

  // Chapter nav
  const navEl = document.getElementById('chapter-nav');
  if (navEl && sutra.chapters.length > 0) {
    navEl.innerHTML = `
      <button onclick="prevChapter()" ${chapterId <= 1 ? 'disabled' : ''}>← ก่อนหน้า</button>
      <select class="chapter-selector" onchange="jumpChapter(this.value)">
        ${sutra.chapters.map(ch => `<option value="${ch.id}" ${String(ch.id) === String(chapterId) ? 'selected' : ''}>บทที่ ${ch.id}: ${ch.title_thai}</option>`).join('')}
      </select>
      <button onclick="nextChapter()" ${chapterId >= sutra.chapters.length ? 'disabled' : ''}>ถัดไป →</button>`;
  }

  // Load chapter JSON
  await loadChapter(sutra, chapterId);

  sessionStorage.setItem('currentSutra', sutra.id);
  sessionStorage.setItem('currentChapter', chapterId);
}

async function loadChapter(sutra, chapterId) {
  const el = document.getElementById('reader-content');
  document.getElementById('loading-chapter-num').textContent = chapterId;
  const scriptData = getScriptChapterData(sutra, chapterId);

  if (window.location.protocol === 'file:' && scriptData) {
    renderChapter(scriptData, el);
    return;
  }

  try {
    const mdUrl = getTranslationMarkdownUrl(sutra, chapterId);
    if (mdUrl) {
      const res = await fetch(mdUrl + '?t=' + Date.now());
      if (res.ok) {
        const markdown = await res.text();
        renderChapter(parseTranslationMarkdown(markdown, chapterId), el);
        return;
      }
    }
  } catch (e) { /* fall through */ }

  try {
    if (typeof CHAPTER_INDEX !== 'undefined' && CHAPTER_INDEX[chapterId]) {
      const url = CHAPTER_INDEX[chapterId] + '?t=' + Date.now();
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        renderChapter(data, el);
        return;
      }
    }
  } catch (e) { /* fall through */ }

  if (scriptData) {
    renderChapter(scriptData, el);
    return;
  }

  // Stub / in-progress
  const ch = sutra.chapters.find(c => String(c.id) === String(chapterId));
  el.innerHTML = `
    <div style="text-align:center;padding:3rem">
      <p style="color:var(--gold);font-size:1.2rem">บทที่ ${chapterId} ${ch ? ch.title_thai : ''}</p>
      <p style="color:var(--text-muted)">⏳ อยู่ระหว่างแปล — ยังไม่มีเนื้อหาเต็ม</p>
      <p style="margin-top:2rem"><a href="index.html" class="back-link">← กลับหน้าหลัก</a></p>
    </div>`;
}

function getScriptChapterData(sutra, chapterId) {
  try {
    const key = `${sutra.id}_${chapterId}`;
    return (typeof GANDAVYUHA_CONTENT !== 'undefined') ? GANDAVYUHA_CONTENT[key] : null;
  } catch (e) {
    return null;
  }
}

function getTranslationMarkdownUrl(sutra, chapterId) {
  const padded = String(chapterId).padStart(3, '0');
  const basePath = window.location.pathname.includes('/web/') ? '../' : '';
  const folder = sutra.folder || '';
  if (folder) {
    return `${basePath}translations/${folder}/chapter_${padded}/original.txt`;
  }
  return '';
}

function parseTranslationMarkdown(markdown, chapterId) {
  const verses = [];
  let title = `บทที่ ${chapterId}`;
  let inContent = false;

  const lines = markdown.split(/\r?\n/);
  // Auto-detect: if no Gandavyuha-style chapter heading, assume direct content (Brahmajala style)
  const hasChapterHeading = lines.some(l => /^##\s+บทที่\s+\d+\s*:/.test(l.trim()));
  if (!hasChapterHeading) inContent = true;

  lines.forEach(raw => {
    const line = raw.trim();
    if (!line) return;
    
    // Skip comments and metadata lines
    if (line.startsWith('<!--') || /^-\s+\*\*/.test(line) || /^##\s+(ข้อมูลการแปล|การแปล)$/.test(line)) return;
    if (/^#\s+คัณฑวยูหะ/.test(line)) return;
    if (/^[-*_]{3,}$/.test(line) || /^\*\*(จบ|หมายเหตุ)/.test(line)) return;
    if (/^#\s+การแปล:/.test(line) || /^#\s+บทที่\s+\d+:/.test(line) || /^#\s+พรหมณ/.test(line)) return;

    // Detect Chapter Title
    const chapterHeading = line.match(/^##\s+บทที่\s+\d+\s*:\s*(.+)$/);
    if (chapterHeading) {
      title = `บทที่ ${chapterId}: ${cleanMarkdownText(chapterHeading[1]).split('(')[0].trim()}`;
      inContent = true;
      return;
    }

    // Detect Sections (H2, H3)
    if (/^#{2,3}\s/.test(line)) {
      verses.push({ thai: cleanMarkdownText(line.replace(/^#{2,3}\s*/, '')), sanskrit: '', is_heading: true });
      inContent = true;
      return;
    }

    // Capture Paragraphs
    if (inContent || /^\d+\./.test(line)) {
      verses.push({ thai: cleanMarkdownText(line), sanskrit: '' });
    }
  });

  return { title, title_sanskrit: '', verses };
}

function cleanMarkdownText(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
}

function renderChapter(data, el) {
  if (!data || !data.verses || data.verses.length === 0) {
    el.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:3rem">ยังไม่มีเนื้อหา</p>';
    return;
  }

  const html = data.verses.map(v => {
    if (v.is_heading) {
      return `<h3 class="verse-heading">${v.thai.replace(/^###\s*/, '')}</h3>`;
    }
    return `<div class="verse">
      <p class="verse-thai">${v.thai}</p>
      ${v.sanskrit ? `<p class="verse-sanskrit" style="display:none;font-style:italic;color:var(--text-muted);font-size:0.9rem;margin-top:0.3rem">${v.sanskrit}</p>` : ''}
    </div>`;
  }).join('');

  el.innerHTML = `
    <span class="chapter-badge">${data.title}</span>
    <div class="toggle-sanskrit" style="text-align:right;margin-bottom:1rem">
      <label style="color:var(--text-muted);font-size:0.85rem">
        <input type="checkbox" onchange="document.querySelectorAll('.verse-sanskrit').forEach(e=>e.style.display=this.checked?'block':'none')"> แสดงสันสกฤต
      </label>
    </div>
    ${html}`;
}


// ── Navigation ─────────────────────────────────────────────

function openSutraReader(sutraId) {
  window.location.href = `reader.html?sutra=${sutraId}`;
}

function prevChapter() {
  const cur = parseInt(sessionStorage.getItem('currentChapter') || '1');
  if (cur > 1) jumpChapter(cur - 1);
}

function nextChapter() {
  const cur = parseInt(sessionStorage.getItem('currentChapter') || '1');
  const sutra = getSutrasData().find(s => String(s.id) === String(sessionStorage.getItem('currentSutra')));
  if (sutra && cur < sutra.chapters.length) jumpChapter(cur + 1);
}

function jumpChapter(chapterId) {
  const sutraId = sessionStorage.getItem('currentSutra') || '40';
  window.location.href = `reader.html?sutra=${sutraId}&chapter=${chapterId}`;
}

function showError(msg) {
  const el = document.getElementById('reader-content');
  if (el) el.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--gold)">${msg}</div>`;
}

// ── Bootstrap ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Detect which page we're on
  const isReader = document.getElementById('reader-header');
  if (isReader) {
    // reader page — initReader is called from reader.html inline script
  } else {
    // index page
    loadSutraList();
    updateStats();
    setupNavigation();
  }
});
