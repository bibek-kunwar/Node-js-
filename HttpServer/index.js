const http = require("http");
const server = http.createServer((req, res) => {
  res.end('hellow response given');
});
server.listen(8000, "127.0.0.1",()=> {
  console.log("listening port no 8000");
});