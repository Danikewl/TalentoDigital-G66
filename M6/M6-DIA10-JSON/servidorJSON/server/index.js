const fs = require("fs");
const express = require("express");
const app = express();
const { v4 } = require("uuid");
const axios = require("axios");

/* MIDDLEWARE PARA PARESEAR EL BODY y poder leerlo */
app.use(express.json());

app.listen(3000, () => {
  console.log("servidor levantado en 3000");
});

app.post("/nuevoUsuario", async (req, res) => {
  const { name, lastname, email, password } = req.query;
  let newID = v4();
  let date = new Date();

  const usuario = {
    id: newID,
    createdAt: date,
    name,
    lastname,
    email,
    password,
  };
  // Paso 1 => Leo el archivo
  const archivo = fs.readFileSync("misUsuarios.json", "utf8");
  // Paso 1.1 => Lo paso a Objeto JS
  const data = await JSON.parse(archivo);

  // Paso 2 => buscar y obtener el array de usuarios
  const usuarios = data.usuarios;
  // Paso 3 => agrego a la variable de usuarios el nuevo usuario
  usuarios.unshift(usuario);

  // Paso 4 => guardo la variable modificada en el archivo
  fs.writeFileSync("misUsuarios.json", JSON.stringify(data));

  res.send("Usuario almacenado con éxito");
});

app.get("/robarApi", async (req, res) => {
  const { urlApi, fileName } = req.body;

  try {
    const response = await axios.get(urlApi);
    const data = JSON.stringify(response.data);

    fs.writeFileSync(`${fileName}.json`, data);

    res.json("JSON almacenado con éxito");
  } catch (error) {
    res.status(500).json(error);
  }
});
