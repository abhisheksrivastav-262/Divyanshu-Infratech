const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.avif': 'image/avif', '.svg': 'image/svg+xml'
};
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const base = pathname.startsWith('/images/') ? path.join(root, 'public') : root;
  const candidate = path.resolve(base, requested);
  const safe = candidate.startsWith(base + path.sep) && fs.existsSync(candidate) && fs.statSync(candidate).isFile();
  if (!safe && pathname.startsWith('/images/')) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Image not found');
    return;
  }
  const file = safe ? candidate : path.join(root, 'index.html');
  res.writeHead(200, { 'Content-Type': contentTypes[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});

server.listen(Number(process.env.PORT || 3000), '127.0.0.1', () => {
  console.log(`Local preview available at http://localhost:${server.address().port}`);
});
