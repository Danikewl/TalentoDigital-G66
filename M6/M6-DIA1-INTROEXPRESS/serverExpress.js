const express = require("express");
const app = express();
const port = 1212;

const superHeroes = ["Batman", "Iron Man", "Spiderman"];

/* RUTAS GET */
app.get("/", (req, res) => {
  console.log("Esta ingresando una petición y nodemon");
  res.send("<h1>Hola Bienvenido a la api!</h1>");
});

app.get("/toctoc", (req, res) => {
  console.log("Estas ingresando a la ruta toc toc");
  res.send("¿WHO IS?");
});

app.get("/toctoc/:nombre", (req, res) => {
  console.log("Estas ingresando a la ruta toc toc");
  res.send("¿WHO IS?... IT'S " + req.params.nombre);
});

app.get("/super/:idSuperHero", (req, res) => {
  console.log("ESTE ES EL REQ.PARAMS===>", req.params); //=> esto es un objeto

  console.log("ESTE ES EL REQ.PARAMS.IDSH===>", req.params.idSuperHero); //=> esto es un valor
  const { idSuperHero } = req.params; //=> destructuring de REQ.PARAMS

  if (idSuperHero > 3) {
    res.send("No hay superheroes con ese id");
  } else {
    res.send(
      `El superheroe que has seleccionado es ${superHeroes[idSuperHero - 1]}`
    );
  }
});

/* RUTA GENÉRICA */
app.get("*", (req, res) => {
  res.send("LA RUTA SOLICITADA NO EXISTE: Las disponibles son / ,  /toctoc");
});

/* ESCUCHAR EL SERVIDOR=> ESTA ACCION LEVANTA EL SERVIDOR Y DEJA AL SERVIDOR EN ESCUCHA DE QUE INGRESEN MÉTODOS AL LUGAR CORRESPONDIENTE */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
