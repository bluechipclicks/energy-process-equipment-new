const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const port = process.env.PORT || 3000;
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log("✅ Next.js server ready on port", port);
  });
});
