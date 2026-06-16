/**
 * The core list of pages to display in the sidebar
 */
const pages = [
  { label: 'Home', path: 'content/home.md' },
  { label: 'Building my personal website', path: 'content/building-my-website.md' },
];

const contentEl = document.getElementById('md-content');
const navEl = document.querySelector('.sidebar-nav');
const toggleBtn = document.querySelector('.sidebar-toggle');

// Toggle accordion on mobile
toggleBtn.addEventListener('click', () => {
  const isOpen = navEl.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

// Load page content and update active link
function loadPage(path, linkEl) {
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  linkEl.classList.add('active');

  // Close accordion on mobile after selecting a page
  navEl.classList.remove('open');
  toggleBtn.setAttribute('aria-expanded', false);

  fetch(path)
    .then(r => r.text())
    .then(md => { contentEl.innerHTML = marked.parse(md); });
}

// Initialize navigation links
pages.forEach((page, i) => {
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = page.label;
  a.addEventListener('click', e => {
    e.preventDefault();
    loadPage(page.path, a);
  });
  navEl.appendChild(a);

  if (i === 0) loadPage(page.path, a);
});
