require("http").createServer((req, res) => {
  const url = req.url.split("/");
  if (url[1] == "essay") { res.end(require("fs").readFileSync("essay.md")); } else { res.end("s e c r e c y"); }
}).listen(8080); // working on essay