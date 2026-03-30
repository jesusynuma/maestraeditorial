/* ============================================
   Maestra Editorial - Main Application
   ============================================ */

const App = (() => {
  const app = document.getElementById('app');

  // --- Theme ---
  function initTheme() {
    const saved = localStorage.getItem('me-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('me-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('me-theme', 'dark');
    }
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = isDark ? 'Modo Oscuridad' : 'Modo Claro';
  }

  function themeButtonText() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return isDark ? 'Modo Claro' : 'Modo Oscuridad';
  }

  // --- Routing ---
  function getRoute() {
    const hash = window.location.hash || '#/';
    if (hash === '#/' || hash === '#' || hash === '') return { page: 'catalog' };
    const bookMatch = hash.match(/^#\/book\/([^/]+)(?:\/(\d+))?$/);
    if (bookMatch) {
      return { page: 'book', bookId: bookMatch[1], poemIndex: bookMatch[2] ? parseInt(bookMatch[2]) : null };
    }
    return { page: 'catalog' };
  }

  function navigate(hash) {
    window.location.hash = hash;
  }

  // --- Format poem text to HTML ---
  function formatPoem(text) {
    const stanzas = text.split('\n\n');
    return stanzas.map(s => {
      const lines = s.split('\n').map(l => `<span class="line">${l}</span>`).join('');
      return `<div class="stanza">${lines}</div>`;
    }).join('');
  }

  // --- Get SVG for a book ---
  function getBookSVG(book) {
    return bookSVGs[book.id] || '';
  }

  // --- Render Catalog ---
  function renderCatalog() {
    Capture.setCurrentBook(null);

    const cardsHTML = books.map(book => `
      <a class="book-card" href="#/book/${book.id}">
        <div class="book-card-cover">
          ${getBookSVG(book)}
        </div>
        <div class="book-card-info">
          <div class="book-card-author">${book.author}</div>
          <div class="book-card-title">${book.title}</div>
        </div>
        <div class="book-card-footer">Maestra Editorial</div>
      </a>
    `).join('');

    app.innerHTML = `
      <div class="catalog-page">
        <header class="site-header">
          <a href="#/" class="site-brand">Maestra Editorial</a>
          <button class="theme-toggle" onclick="App.toggleTheme()">${themeButtonText()}</button>
        </header>
        <div class="catalog-hero">
          <div class="catalog-hero-brand">Cat\u00e1logo de poes\u00eda</div>
          <div class="catalog-hero-arrow">\u2193</div>
        </div>
        <div class="book-grid">
          ${cardsHTML}
        </div>
      </div>
    `;

    window.scrollTo(0, 0);
  }

  // --- Render Book Reader ---
  function renderBook(bookId, scrollToPoemIndex) {
    const book = books.find(b => b.id === bookId);
    if (!book) { renderCatalog(); return; }

    Capture.setCurrentBook(book);

    const indexHTML = book.poems.map((poem, i) =>
      `<li><a href="#poem-${i}" data-index="${i}" class="sidebar-poem-link">${poem.title}</a></li>`
    ).join('');

    const poemsHTML = book.poems.map((poem, i) => `
      <section class="poem-section" id="poem-${i}" data-poem-index="${i}">
        <div class="poem-title">${poem.title}</div>
        <div class="poem-body">${formatPoem(poem.content)}</div>
        <div class="poem-actions">
          <button class="poem-action-btn" onclick="App.savePoem(${i})" title="Guardar como imagen">Guardar</button>
          <button class="poem-action-btn poem-copy-btn" onclick="App.copyPoem(${i})" title="Copiar poema">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copiar
          </button>
        </div>
      </section>
    `).join('');

    app.innerHTML = `
      <div class="book-reader">
        <button class="sidebar-toggle" id="sidebar-toggle">\u2630</button>
        <nav class="book-sidebar" id="book-sidebar">
          <div class="sidebar-header">
            <button class="sidebar-back" onclick="App.goHome()">Cat\u00e1logo</button>
            <div class="sidebar-book-title">${book.title}</div>
            <div class="sidebar-book-author">${book.author}</div>
          </div>
          <ul class="sidebar-index" id="sidebar-index">
            ${indexHTML}
          </ul>
        </nav>
        <main class="book-content">
          <header class="site-header" style="position:sticky;top:0;background:var(--bg-color);z-index:10;">
            <span></span>
            <button class="theme-toggle" onclick="App.toggleTheme()">${themeButtonText()}</button>
          </header>
          <div class="book-hero">
            <div class="book-hero-svg">${getBookSVG(book)}</div>
            <div class="book-hero-author">${book.author}</div>
            <h1 class="book-hero-title">${book.title}</h1>
            <div class="book-hero-brand">Maestra Editorial</div>
          </div>
          ${poemsHTML}
        </main>
      </div>
    `;

    // Setup sidebar toggle for mobile
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('book-sidebar');
    if (toggle) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Sidebar link clicks (smooth scroll + close on mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-poem-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = link.getAttribute('data-index');
        const target = document.getElementById(`poem-${idx}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        sidebar.classList.remove('open');
      });
    });

    // Setup intersection observer for active poem tracking
    setupPoemObserver();

    // Scroll to specific poem if requested
    if (scrollToPoemIndex !== null && scrollToPoemIndex !== undefined) {
      setTimeout(() => {
        const target = document.getElementById(`poem-${scrollToPoemIndex}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }

  // --- Poem Observer (highlight active in sidebar) ---
  function setupPoemObserver() {
    const sections = document.querySelectorAll('.poem-section');
    const links = document.querySelectorAll('.sidebar-poem-link');

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = entry.target.getAttribute('data-poem-index');
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.sidebar-poem-link[data-index="${idx}"]`);
          if (active) {
            active.classList.add('active');
            active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  // --- Public Actions ---
  function goHome() {
    navigate('#/');
  }

  function savePoem(index) {
    Capture.capturePoem(index);
  }

  function copyPoem(index) {
    const route = getRoute();
    const book = books.find(b => b.id === route.bookId);
    if (!book || !book.poems[index]) return;
    const poem = book.poems[index];
    const fullText = poem.title + '\n\n' + poem.content + '\n\n\u2014 ' + book.author + ', ' + book.title;
    navigator.clipboard.writeText(fullText).then(() => {
      Capture.showToast('Poema copiado');
    }).catch(() => {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = fullText;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      Capture.showToast('Poema copiado');
    });
  }

  // --- Router ---
  function handleRoute() {
    const route = getRoute();
    if (route.page === 'book') {
      renderBook(route.bookId, route.poemIndex);
    } else {
      renderCatalog();
    }
  }

  // --- Init ---
  function init() {
    initTheme();
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
  }

  init();

  return {
    toggleTheme,
    goHome,
    savePoem,
    copyPoem,
    navigate
  };
})();
