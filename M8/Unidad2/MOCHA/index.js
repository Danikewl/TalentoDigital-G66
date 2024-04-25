const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).json("SUCCESS!");
  } catch (error) {
    res.json("Error");
  }
});

app.get("/bicicletas", (req, res) => {
  try {
    let data = {
      status: "OK",
      api_version: 1.1,
      bicicletas: [
        { name: "Venzo", rodado: 20 },
        { name: "Trek", rodado: 26 },
      ],
    };
    res.json(data);
  } catch (error) {
    res.json("Error");
  }
});

app.get("/usuarios", (req, res) => {
  try {
    res.status(200).json("usuarios");
  } catch (error) {
    res.json("Error");
  }
});

app.listen(3000, () => {
  console.log("Servidor levantado con éxito en el puerto 3000");
});

module.exports = { app };
