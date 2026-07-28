// ── Tantra App ──────────────────────────────────────────

const CATEGORY_LABELS = {
  kriya: 'กริยาตันตระ (Kriyā Tantra)',
  yoga: 'โยคตันตระ (Yoga Tantra)',
  yogini: 'โยคินีตันตระ (Yoginī Tantra)',
  anuttara: 'อนุตตรโยคตันตระ (Anuttarayoga Tantra)',
  darsana: 'ตันตระทรรศนะ (Tantra Darśana)',
  sahaja: 'สหชายาน (Sahajayāna)',
  yogottara: 'โยคุตตรตันตระ (Yogottara Tantra)',
  kriya_tika: 'กริยาตันตระฏีกา (Kriyātantraṭīkā)'
};

const CATEGORY_ICONS = {
  kriya: '🔱',
  yoga: '☯️',
  yogini: '🔮',
  anuttara: '⚡',
  darsana: '📖',
  sahaja: '🌸',
  yogottara: '🌟',
  kriya_tika: '📝'
};

function buildTantraCard(text) {
  const pct = text.chapters_count > 0
    ? Math.round(text.chapters.filter(c => c.status === 'completed').length / text.chapters_count * 100)
    : 0;
  const statusLabel = { pending: '⏳ รอแปล', in_progress: '🔄 กำลังแปล', completed: '✅ แปลแล้ว' };
  const statusColor = { pending: 'var(--text-muted)', in_progress: 'var(--gold)', completed: '#4caf50' };
  const sutraId = text.page_id || text.dsbc_id || '';
    return `
    <div class="sutra-card" onclick="location.href='reader.html?sutra=${sutraId}'" style="cursor:pointer">
      <div class="sutra-card-header">
        <div class="sutra-number">${CATEGORY_ICONS[text.category] || '📜'} ${CATEGORY_LABELS[text.category]?.split(' ')[0] || text.category}</div>
        <div class="sutra-status" style="color:${statusColor[text.status]}">${statusLabel[text.status] || text.status}</div>
      </div>
      <h3>${text.title_thai}</h3>
      <p class="sutra-sanskrit">${text.title_sanskrit}</p>
      <p class="sutra-desc">${text.description}</p>
      <div class="sutra-meta">
        <span>${text.editor || ''}</span>
        <span>${text.century || ''}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${pct}%;background:${pct < 100 ? 'var(--gold)' : '#4caf50'}"></div>
      </div>
      <div class="sutra-card-footer">
        <span>${text.chapters_count > 1 ? `${text.chapters_count} บท` : '1 ภาค'}</span>
        <span>${pct}%</span>
      </div>
    </div>`;
}

function loadTantraCategory(category, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const texts = TANTRA_DATA.filter(t => t.category === category);
  if (texts.length === 0) { el.innerHTML = '<p style="color:var(--text-muted);font-style:italic">ยังไม่มีข้อมูล</p>'; return; }
  el.innerHTML = texts.map(buildTantraCard).join('');
}

function updateTantraStats() {
  const tot = TANTRA_DATA.reduce((s, x) => s + x.chapters_count, 0);
  const done = TANTRA_DATA.filter(x => x.status === 'completed').length;
  const wip = TANTRA_DATA.filter(x => x.status === 'in_progress').length;
  ['total-texts', 'total-chapters', 'completed', 'in-progress'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'total-texts') el.textContent = TANTRA_DATA.length;
    else if (id === 'total-chapters') el.textContent = tot;
    else if (id === 'completed') el.textContent = done;
    else if (id === 'in-progress') el.textContent = wip;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const categories = ['kriya', 'yoga', 'yogini', 'anuttara', 'darsana', 'sahaja', 'yogottara', 'kriya_tika'];
  categories.forEach(cat => loadTantraCategory(cat, cat + '-list'));
  updateTantraStats();
});
