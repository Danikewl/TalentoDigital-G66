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
  try {
    console.log("Estas ingresando a la ruta toc toc");
    res.status(200).send("¿WHO IS?");
  } catch (error) {
    res.status(500).send("hay un error");
  }
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

app.get("/azar/:numero", (req, res) => {
  const numeroRandom = Math.floor(Math.random() * (4 - 1)) + 1; //devuelve un number

  const numero = Number(req.params.numero); // Params siempre devolverá un string para ser tratado como number, debo cambiar su tipo de dato con el método Number()

  console.log("numero Random =>", numeroRandom);
  console.log("numero Elegido =>", numero);

  numero === numeroRandom
    ? res.send("Hoy estás de suerte ;) 🍀")
    : res.send("Buena suerte para la próxima... 🧅");
});

app.get("/redireccionar/:pagina", function (req, res) {
  const { pagina } = req.params;

  res.redirect(`https://www.${pagina}.com`);
});

/* RUTA GENÉRICA */
app.get("*", (req, res) => {
  res.send("LA RUTA SOLICITADA NO EXISTE: Las disponibles son / ,  /toctoc");
});

/* ESCUCHAR EL SERVIDOR=> ESTA ACCION LEVANTA EL SERVIDOR Y DEJA AL SERVIDOR EN ESCUCHA DE QUE INGRESEN MÉTODOS AL LUGAR CORRESPONDIENTE */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
