// ── Sarvāstivāda App ──────────────────────────────────────

function getCategoryLabel(cat) {
    const labels = { abhidharma: 'อภิธรรม', vinaya: 'วินัย', agama: 'อาคม' };
    return labels[cat] || cat;
}

function getStatusLabel(status) {
    const labels = { pending: '⏳ รอแปล', in_progress: '🔄 กำลังแปล', completed: '✅ แปลแล้ว' };
    return labels[status] || status;
}

function getStatusColor(status) {
    const colors = { pending: 'var(--text-muted)', in_progress: 'var(--gold)', completed: '#4caf50' };
    return colors[status] || 'var(--text-muted)';
}

function buildCard(text) {
    const pct = text.chapters_count > 0
        ? Math.round(text.chapters.filter(c => c.status === 'completed').length / text.chapters_count * 100)
        : 0;
    return `
        <div class="sutra-card" onclick="location.href='reader.html?sutra=${text.id}'">
            <div class="sutra-card-header">
                <div class="sutra-number">${text.category}</div>
                <div class="sutra-status" style="color:${getStatusColor(text.status)}">${getStatusLabel(text.status)}</div>
            </div>
            <h3>${text.title_thai}</h3>
            <p class="sutra-sanskrit">${text.title_sanskrit}</p>
            <p class="sutra-desc">${text.description}</p>
            <div class="sutra-meta">
                <span>${text.author || ''}</span>
                <span>${text.century || ''}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width:${pct}%;background:${pct < 100 ? 'var(--gold)' : '#4caf50'}"></div>
            </div>
            <div class="sutra-card-footer">
                <span>${text.chapters_count} บท</span>
                <span>${pct}%</span>
            </div>
        </div>`;
}

function loadCategoryList(category, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const texts = SARVASTIVADA_DATA.filter(t => t.category === category);
    el.innerHTML = texts.map(buildCard).join('');
}

function updateStats() {
    const tot = SARVASTIVADA_DATA.reduce((s, x) => s + x.chapters_count, 0);
    const done = SARVASTIVADA_DATA.filter(x => x.status === 'completed').length;
    const wip = SARVASTIVADA_DATA.filter(x => x.status === 'in_progress').length;
    ['total-texts', 'total-chapters', 'completed', 'in-progress'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === 'total-texts') el.textContent = SARVASTIVADA_DATA.length;
        else if (id === 'total-chapters') el.textContent = tot;
        else if (id === 'completed') el.textContent = done;
        else if (id === 'in-progress') el.textContent = wip;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCategoryList('abhidharma', 'abhidharma-list');
    loadCategoryList('vinaya', 'vinaya-list');
    loadCategoryList('agama', 'agama-list');
    updateStats();
});
