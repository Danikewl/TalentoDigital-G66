const express = require("express");
const expressFileUpload = require("express-fileupload");
const fs = require("fs").promises;
const app = express();

/* middlewares */
let filesConfig = {
  limits: { fileSize: 5000000 }, //tamaño en bytes =>  1kb => 1024bytes
  abortOnLimit: true, //Si se pasa de 5MB responde con el error de abajo ↓
  responseOnLimit:
    "El peso del archivo que intentas subir supera el limite permitido.",
};

app.use(expressFileUpload(filesConfig));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
  <form method="POST" enctype="multipart/form-data" multiple>
  <input type="file" name="foto_subida" required>
  <button> Upload </button>
  </form>
  `);
});

app.post("/", (req, res) => {
  const { foto_subida } = req.files;
  console.log(req.files);

  const { name } = foto_subida;

  let date = new Date();
  let time = date.getTime();
  let newFileName = `${time + "-" + name}`;
  foto_subida.mv(`${__dirname}/public/${newFileName}`, (err) => {
    if (err) {
      console.log(err);
      res.send("Ha ocurrido un error insesperado");
    } else {
      res.send("http://localhost:3000/" + newFileName);
    }
  });
});

app.delete("/:nombre", async (req, res) => {
  const { nombre } = req.params;
  await fs.unlink(`${__dirname}/public/${nombre}`);
  res.send(`Imagen ${nombre} fue eliminada con éxito`);
});




app.listen(3000, () => {
  console.log("servidor levantado en el puerto 3000");
});


