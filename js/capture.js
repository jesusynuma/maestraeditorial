/* ============================================
   Capture & Screenshot Functionality
   ============================================ */

const Capture = (() => {
  const stage = document.getElementById('capture-stage');
  const fragmentBtn = document.getElementById('fragment-capture-btn');
  let currentBook = null;

  function setCurrentBook(book) {
    currentBook = book;
  }

  // Format poem content into HTML with stanzas
  function formatContentHTML(text) {
    const stanzas = text.split('\n\n');
    return stanzas.map(s => {
      const lines = s.split('\n').map(l => `<span class="line">${l}</span>`).join('');
      return `<div class="stanza">${lines}</div>`;
    }).join('');
  }

  // Build a capture card element
  function buildCaptureCard(contentHTML) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const card = document.createElement('div');
    card.className = `capture-card ${isDark ? 'dark-capture' : 'light-capture'}`;
    card.innerHTML = `
      <div class="capture-card-content">${contentHTML}</div>
      <div class="capture-card-meta">
        <div>
          <div class="capture-card-book">${currentBook ? currentBook.title : ''}</div>
          <div class="capture-card-author">${currentBook ? currentBook.author : ''}</div>
        </div>
        <div class="capture-card-brand">Maestra Editorial</div>
      </div>
    `;
    return card;
  }

  // Render card to image and download
  function captureAndDownload(card, filename) {
    stage.innerHTML = '';
    stage.appendChild(card);

    // Small delay to ensure fonts/styles load
    requestAnimationFrame(() => {
      html2canvas(card, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = filename || 'maestra-editorial.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        stage.innerHTML = '';
        showToast('Imagen guardada');
      }).catch(() => {
        stage.innerHTML = '';
        showToast('Error al capturar');
      });
    });
  }

  // Capture a full poem
  function capturePoem(poemIndex) {
    if (!currentBook || !currentBook.poems[poemIndex]) return;
    const poem = currentBook.poems[poemIndex];
    const contentHTML = formatContentHTML(poem.content);
    const card = buildCaptureCard(contentHTML);
    const safeName = poem.title.replace(/[^a-zA-Z0-9áéíóúñü ]/gi, '').trim().replace(/\s+/g, '-').toLowerCase();
    captureAndDownload(card, `${currentBook.id}-${safeName}.png`);
  }

  // Capture selected text fragment
  function captureFragment() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const text = selection.toString().trim();
    if (!text) return;

    // Format the selected text preserving line breaks
    const lines = text.split('\n');
    const contentHTML = lines.map(l => `<span class="line">${l}</span>`).join('');
    const card = buildCaptureCard(`<div class="stanza">${contentHTML}</div>`);
    captureAndDownload(card, `fragmento-${currentBook ? currentBook.id : 'poema'}.png`);

    // Clear selection
    selection.removeAllRanges();
    fragmentBtn.style.display = 'none';
  }

  // Show toast notification
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // Text selection listener
  function initSelectionCapture() {
    document.addEventListener('mouseup', (e) => {
      // Ignore clicks on the fragment button itself
      if (e.target === fragmentBtn) return;

      const selection = window.getSelection();
      if (selection && !selection.isCollapsed && selection.toString().trim().length > 3) {
        // Check if selection is within a poem
        const anchor = selection.anchorNode;
        const poemSection = anchor && anchor.nodeType === 3
          ? anchor.parentElement.closest('.poem-section')
          : anchor && anchor.closest ? anchor.closest('.poem-section') : null;

        if (poemSection) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          fragmentBtn.style.display = 'block';
          fragmentBtn.style.left = `${rect.left + rect.width / 2 - 80}px`;
          fragmentBtn.style.top = `${rect.bottom + window.scrollY + 10}px`;
          return;
        }
      }
      fragmentBtn.style.display = 'none';
    });

    // Handle fragment button click
    fragmentBtn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      captureFragment();
    });

    // Hide on scroll
    document.addEventListener('scroll', () => {
      fragmentBtn.style.display = 'none';
    }, { passive: true });
  }

  // Initialize
  initSelectionCapture();

  return {
    setCurrentBook,
    capturePoem,
    showToast
  };
})();
