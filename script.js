async function loadSite() {
  let data;
  try {
    const res = await fetch('data.json');
    data = await res.json();
  } catch (err) {
    console.error('Could not load data.json', err);
    data = { research: [], posts: [] };
  }

  const researchEl = document.getElementById('research-list');
  const postsEl = document.getElementById('posts-list');

  if (!data.research || data.research.length === 0) {
    researchEl.innerHTML = '<p class="empty-note">No research files yet — add one in data.json.</p>';
  } else {
    researchEl.innerHTML = data.research.map(item => `
      <article class="card">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="meta">${escapeHtml(item.date || '')}</p>
        <p>${escapeHtml(item.summary || '')}</p>
        ${item.file ? `<a class="file-link" href="${escapeAttr(item.file)}" target="_blank" rel="noopener">Open file →</a>` : ''}
      </article>
    `).join('');
  }

  if (!data.posts || data.posts.length === 0) {
    postsEl.innerHTML = '<p class="empty-note">No posts yet — add one in data.json.</p>';
  } else {
    postsEl.innerHTML = data.posts.map(item => `
      <article class="post">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="meta">${escapeHtml(item.date || '')}</p>
        <p>${escapeHtml(item.content || item.excerpt || '')}</p>
      </article>
    `).join('');
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}

loadSite();
