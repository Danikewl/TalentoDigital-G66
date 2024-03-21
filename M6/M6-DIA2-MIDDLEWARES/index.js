/* LLamar a express */
const express = require("express");
/* Instanciar express */
const app = express();
const PORT = 3000;
const users = [
  { id: "1234", name: "Alan" },
  { id: "5678", name: "Lautaro" },
];

/* Configuramos los MIDDLEWARES */
app.use((req, res, next) => {
  console.log("Soy en el middleware general, siempre me ejecuto");
  next();
});

app.use("/tiempo", (req, res, next) => {
  console.log(
    "soy el middleware de /tiempo, solo me ejecuto cuando entre una petición a /tiempo"
  );

  let Authorization = req.header("Authorization");

  let loggedUser = users.find((user) => user.id == Authorization);

  if (loggedUser) {
    req.loggedUser = loggedUser;
    next();
  } else {
    res.send("🛑📛❌No tienes autorización, sitio restringido ⭕🚫⛔");
  }
});

/* Rutas GET */
app.get("/", (req, res) => {
  res.status(200).send("Soy la ruta /");
});

app.get("/tiempo", (req, res) => {
  let fechaActual = Date.now();
  res
    .status(200)
    .send(
      `El usuario ${req.loggedUser.name} ha ingresadoo el día ${fechaActual}`
    );
});

/* Levantar el servidor => método .listen*/
app.listen(PORT, () => {
  console.log("Servidor levantado correctamente en el puerto: ", PORT);
});
