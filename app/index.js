const http = require('http');
const config = require('./config');
const handler = require('./server-handler');
const server = http.createServer(handler);

server.listen(config.port, () => {
  console.log(config.envName + ' http server listening on port', config.port)
});