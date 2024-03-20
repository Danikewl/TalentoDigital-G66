const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/Inicio" && req.method == "GET") {
      console.log("esto deberia mostrarse en consola");
      res.end("Hola Como estan?");
    }
  })
  .listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
  });
