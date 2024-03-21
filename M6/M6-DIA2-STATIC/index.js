/* LLamar a express */
const express = require("express");
/* Instanciar express */
const app = express();
const PORT = 3000;

/* Configuramos los MIDDLEWARES */
app.use(express.static("public"));

/* Rutas GET */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/info", (req, res) => {
  res.json({ info: ["info"] });
});

/* Levantar el servidor => método .listen*/
app.listen(PORT, () => {
  console.log("Servidor levantado correctamente en el puerto: ", PORT);
});
