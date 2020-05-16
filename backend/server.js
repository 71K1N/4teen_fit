const http = require("http");
const app = require("./src/app");
const port = 8081;
const server = http.createServer(app);
server.listen(port);