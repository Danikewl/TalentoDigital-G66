const express = require("express");
const expressFileUpload = require("express-fileupload");
const fs = require("fs").promises;
const app = express();

/* middlewares */
let filesConfig = {
  limits: { fileSize: 10000000 },
  abortOnLimit: true,
  responseOnLimit:
    "El peso de la cancion que intentas subir supera el limite permitido",
};
app.use(expressFileUpload(filesConfig));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="" enctype="multipart/form-data">
    <input type="text" name="nombre" required placeholder="Nombre">
    <input type="text" name="artista" required placeholder="Artista">
    <input type="text" name="album" required placeholder="Album">
    <input type="file" name="cancion" required>
    <button> Upload! </button>
    </form>
    `);
});

app.post("/", (req, res) => {
  const { cancion } = req.files;
  const { nombre, artista, album } = req.body;
  const name = `${nombre} - ${artista} (${album})`;
  cancion.mv(`${__dirname}/public/${name}.mp3`, (err) => {
    res.send(`http://localhost:3000/${name}.mp3`);
  });
});

app.delete("/:nombre", async (req, res) => {
  const { nombre } = req.params;
  await fs.unlink(`${__dirname}/public/${nombre}.mp3`);
  res.send(`Imagen ${nombre} fue eliminada con éxito`);
});


app.listen(3000, () => {
  console.log("servidor levantado en el puerto 3000");
});
