const http = require("http");
const app = require("./app");
const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Manji's First server is running on port ${PORT}`);
});
