const movies = require("./data/movies.json"); //Esto me da un array JS
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

/* MIDDLEWARES */
/* CORS */
app.use(cors());

/* RUTA DE PRUEBA */
app.get("/prueba", (req, res) => {
  try {
    console.log("SI VES ESTE MENSAJE, ES PORQUE ENTRASTE A LA RUTA");

    res.send("SI VES ESTE MENSAJE TU RUTA API FUNCIONA CORRECTAMENTE");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/* RUTAS GET */
/* Crear una ruta que me devuelva las peliculas que tengo en mi json */
app.get("/movies", (req, res) => {
  try {
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/* RUTAS POST */
/* Crear una ruta que me permita agregar una nueva película al json */
/*query(?name=algo&author=JJR&year=1234) => para agarrar los datos que me envia el cliente */
/* modifico el array de pelicuas actual y le agrego la película nueva */
/* el array de películas tiene una peli nueva y la agrego al movies.json */
/* Para transformar mi objeto/array JS a uno de formato Json debo parsearlo */
app.post("/movies", (req, res) => {
  try {
    const { name, author, year } = req.query;
    const newMovie = { name: name, author: author, year: year }; //=>{ name, author, year }

    movies.push(
      newMovie
    ); /* En este momento tengo un objeto JS, pero debo parsearlo */

    let newJson = JSON.stringify(movies);

    fs.writeFile("./data/movies.json", newJson, "utf-8", (err) => {
      err === null
        ? console.log("Archivo editado con éxito")
        : res.status(500).send(err.message);
    });

    res.status(200).json("PELÍCULA CREADA");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/* RUTAS DELETE */
/* Crear una ruta que me permita eliminar una nueva película del json */
app.delete("/movies", (req, res) => {
  try {
    const { name } = req.query; //focus

    let newArray = movies.filter((movie) => movie.name !== name); // !== Focus

    let newJson = JSON.stringify(newArray);

    fs.writeFile("./data/movies.json", newJson, "utf-8", (err) => {
      err === null
        ? console.log("Archivo eliminado con éxito")
        : res.status(500).send(err.message);
    });

    res.status(200).json("PELÍCULA ELIMINADA");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/* LEVANTAR SERVIDOR */
app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
