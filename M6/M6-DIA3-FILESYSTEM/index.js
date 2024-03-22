const fs = require("fs");
const morgan = require("morgan");
const express = require("express");
const app = express();
const PORT = 3000;

const fileName = "tareas.txt";

/* Middlewares */
app.use(morgan("dev"));

/* Rutas POST => Para crear */
app.post("/", async (req, res) => {
  try {
    fs.writeFile(
      "./temp/tareas.txt",
      `1) Hacer aseo en la casa`,
      "utf8",
      (err) => {
        err === null
          ? console.log("Archivo creado con éxito")
          : console.log("Error al crear archivo", err.message);
      }
    );

    res.send("Ruta POST ejecutada");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/* Rutas PUT => Para editar*/
app.put("/", (req, res) => {
  try {
    const { tareaNueva } = req.query;

    fs.readFile("./temp/tareas.txt", "utf8", (err, data) => {
      data
        ? fs.writeFile(
            "./temp/tareas.txt",
            `${data + "\n" + tareaNueva}`,
            "utf-8",
            (err) => {
              err === null
                ? console.log("Archivo editado con éxito")
                : res.status(500).send(err.message);
            }
          )
        : res.status(500).send(err.message);
    });

    res.send("Ruta ejecutada");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/rename", (req, res) => {
  fs.rename("./temp/tareas.txt", "./temp/tasks.txt", (err) => {
    console.log("Archivo renombrado o error?", err);
  });
  res.send("Ruta ejecutada");
});

/* Rutas DELETE => Para eliminar */
app.delete("/", (req, res) => {
  const { fileName } = req.query;
  fs.unlink(`./temp/${fileName}`, () => {
    console.log("Archivo eliminado");
  });
  res.send("Ruta ejecutada");
});

/* Levantar el servidor */
app.listen(PORT, () => {
  console.log("💚 Servidor levantado correctamente 💚");
});
