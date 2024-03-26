const { users } = require("./db.js");
const express = require("express");
const app = express();
const PORT = 3000;

/* MIDDLEWARES */
//??????????
/* RUTAS */

app.get("/usuarios", (req, res) => {
  try {
    const { rut } = req.query; //un rut o undefined
    const usuarioEncontrado = users.find((user) => user.rut == rut); //un usuario o undefined

    if (!usuarioEncontrado) {
      rut
        ? res.send(`No se encontró ningún usuario con el rut ${rut}`)
        : res.send("No se ha proporcionado un rut");
    } else {
      const { nombre, apellido } = usuarioEncontrado;
      res.send(
        `¡Usuario encontrado! Nombre: ${nombre} - Apellido: ${apellido}`
      );
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = { app, PORT };
