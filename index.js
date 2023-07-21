const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;
// const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>about page</h1>");
  }
  if (req.url === "/contacts") {
    return res.end("<h1>contact page</h1>");
  }
  if (req.url === "/services") {
    return res.end("<h1>service page</h1>");
  } else {
    return res.end("<h1>404 page not found</h1>");
  }
});
//server.listen(PORT, hostname, () => {
server.listen(PORT, () => {
  console.log(`server is working`);
});
