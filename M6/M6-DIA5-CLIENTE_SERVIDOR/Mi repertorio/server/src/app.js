import repertorios from "../repertorioEjemplo.json" assert { type: "json" };
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 8080;

/* MIDLLEWARES */
/* cors=> middleware para aceptar peticiones de otros servidores */
app.use(cors());

/* RUTAS */
app.get("/", async (req, res) => {
  try {
    res.send("BIENVENIDO A LA API!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/crear", (req, res) => {
  try {
    const { nombre, contenido } = req.query;
    console.log(req.query);
    fs.writeFile(nombre, contenido, () => {
      res.send("Archivo creado con éxito!");
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/leer", (req, res) => {
  try {
    const { nombre } = req.query;
    console.log(req.query);
    fs.readFile(nombre, (err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.get("/renombrar", (req, res) => {
  const { nombreNuevo, nombreViejo } = req.query;

  fs.rename(nombreViejo, nombreNuevo, (err, data) => {
    res.send(`Archivo  ${nombreViejo} renombrado por
    ${nombreNuevo}`);
  });
});

app.get("/eliminar", (req, res) => {
  const { nombre } = req.query;
  fs.unlink(nombre, (err, data) => {
    res.send(`Archivo ${nombre} eliminado con éxito`);
  });
});

/* ------------------------------------------------------------------------------------------------- */
/* ejemplo de JS con front  y el json de ejemplo */
app.get("/buscarartista", (req, res) => {
  console.log("entro la peticion");
  try {
    const { nombre } = req.query;
    const artista = repertorios.find((artista) => artista.nombre === nombre);

    if (artista) {
      res.json({ status: "ok", artista: artista });
    } else {
      res.send({ status: "error", message: "No se encontró el artista" });
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

export { app, PORT };
