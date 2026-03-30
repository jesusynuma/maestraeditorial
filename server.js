const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const ADMIN_KEY = process.env.ADMIN_KEY || 'maestra2026';

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// --- Data persistence helpers ---
function getBookData(bookId) {
  const file = path.join(DATA_DIR, `${bookId}.json`);
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return { ratings: {}, views: {}, reviews: [] };
  }
}

function saveBookData(bookId, data) {
  const file = path.join(DATA_DIR, `${bookId}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// --- Parse JSON body ---
function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch { resolve({}); }
    });
  });
}

// --- JSON response helpers ---
function jsonResponse(res, data, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// --- Route handler ---
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // --- API Routes ---

  // GET /api/book/:id/stats?deviceId=xxx
  const statsMatch = pathname.match(/^\/api\/book\/([^/]+)\/stats$/);
  if (statsMatch && req.method === 'GET') {
    const bookId = statsMatch[1];
    const deviceId = url.searchParams.get('deviceId') || '';
    const data = getBookData(bookId);
    const ratings = Object.values(data.ratings);
    const avg = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
    return jsonResponse(res, {
      avgRating: avg,
      ratingCount: ratings.length,
      views: Object.keys(data.views).length,
      hasVoted: !!data.ratings[deviceId]
    });
  }

  // POST /api/book/:id/view
  const viewMatch = pathname.match(/^\/api\/book\/([^/]+)\/view$/);
  if (viewMatch && req.method === 'POST') {
    const bookId = viewMatch[1];
    const body = await parseBody(req);
    const data = getBookData(bookId);
    if (body.deviceId) {
      data.views[body.deviceId] = (data.views[body.deviceId] || 0) + 1;
    }
    saveBookData(bookId, data);
    return jsonResponse(res, { ok: true });
  }

  // POST /api/book/:id/rate
  const rateMatch = pathname.match(/^\/api\/book\/([^/]+)\/rate$/);
  if (rateMatch && req.method === 'POST') {
    const bookId = rateMatch[1];
    const body = await parseBody(req);
    const data = getBookData(bookId);
    if (!body.deviceId || !body.rating) {
      return jsonResponse(res, { ok: false, message: 'Datos incompletos' }, 400);
    }
    if (data.ratings[body.deviceId]) {
      return jsonResponse(res, { ok: false, message: 'Ya has votado' });
    }
    data.ratings[body.deviceId] = Math.min(5, Math.max(1, parseInt(body.rating)));
    saveBookData(bookId, data);
    return jsonResponse(res, { ok: true });
  }

  // GET /api/book/:id/reviews (only approved)
  const reviewsGetMatch = pathname.match(/^\/api\/book\/([^/]+)\/reviews$/);
  if (reviewsGetMatch && req.method === 'GET') {
    const bookId = reviewsGetMatch[1];
    const data = getBookData(bookId);
    const approved = data.reviews.filter(r => r.approved);
    return jsonResponse(res, approved);
  }

  // POST /api/book/:id/review
  const reviewPostMatch = pathname.match(/^\/api\/book\/([^/]+)\/review$/);
  if (reviewPostMatch && req.method === 'POST') {
    const bookId = reviewPostMatch[1];
    const body = await parseBody(req);
    if (!body.text) {
      return jsonResponse(res, { ok: false, message: 'Escribe algo' }, 400);
    }
    const data = getBookData(bookId);
    data.reviews.push({
      id: Date.now().toString(36),
      name: (body.name || 'Anónimo').substring(0, 50),
      text: body.text.substring(0, 500),
      deviceId: body.deviceId || '',
      approved: false,
      date: new Date().toISOString()
    });
    saveBookData(bookId, data);
    return jsonResponse(res, { ok: true });
  }

  // --- Admin Routes ---

  // GET /api/admin/reviews?key=xxx
  if (pathname === '/api/admin/reviews' && req.method === 'GET') {
    const key = url.searchParams.get('key');
    if (key !== ADMIN_KEY) return jsonResponse(res, { error: 'No autorizado' }, 401);
    // Return all reviews from all books
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    const allReviews = [];
    files.forEach(f => {
      const bookId = f.replace('.json', '');
      const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'));
      (data.reviews || []).forEach(r => allReviews.push({ ...r, bookId }));
    });
    return jsonResponse(res, allReviews);
  }

  // POST /api/admin/review/approve?key=xxx
  if (pathname === '/api/admin/review/approve' && req.method === 'POST') {
    const key = url.searchParams.get('key');
    if (key !== ADMIN_KEY) return jsonResponse(res, { error: 'No autorizado' }, 401);
    const body = await parseBody(req);
    if (!body.bookId || !body.reviewId) return jsonResponse(res, { ok: false }, 400);
    const data = getBookData(body.bookId);
    const review = data.reviews.find(r => r.id === body.reviewId);
    if (review) {
      review.approved = body.approved !== false;
      saveBookData(body.bookId, data);
    }
    return jsonResponse(res, { ok: true });
  }

  // POST /api/admin/review/delete?key=xxx
  if (pathname === '/api/admin/review/delete' && req.method === 'POST') {
    const key = url.searchParams.get('key');
    if (key !== ADMIN_KEY) return jsonResponse(res, { error: 'No autorizado' }, 401);
    const body = await parseBody(req);
    if (!body.bookId || !body.reviewId) return jsonResponse(res, { ok: false }, 400);
    const data = getBookData(body.bookId);
    data.reviews = data.reviews.filter(r => r.id !== body.reviewId);
    saveBookData(body.bookId, data);
    return jsonResponse(res, { ok: true });
  }

  // --- Static file serving ---
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'index.html'), (err2, fallback) => {
        if (err2) { res.writeHead(500); res.end('Server Error'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fallback);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Maestra Editorial running on port ${PORT}`);
});
