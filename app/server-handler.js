const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const routes = require('./routes');

const serverHandler = function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryParams = parsedUrl.query;
  const headers = req.headers;

  let buffer = '';
  const decoder = new StringDecoder('utf-8');

  req.on('data', (data) => {
    buffer += decoder.write(data);
    console.log(data, decoder.write(data))
  });

  req.on('end', () => {
    buffer += decoder.end();
    const data = {path, method, queryParams, headers, body: buffer};

    const chosenRoute = routes[path] || routes.notFound;

    chosenRoute(data, (status = 200, payload = {}) => {
      res.setHeader('Content-Type', 'application/json');
      res.writeHeader(status);
      res.end(JSON.stringify(payload));
    })
  });
};

module.exports = serverHandler;
