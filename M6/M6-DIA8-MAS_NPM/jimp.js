const Jimp = require("jimp");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 4000;

/* RUTA GET */
app.get("/", async (req, res) => {
  try {
    /* seteo un header para enviar en la respuesta => Para avisarle al que consumio mi api, que le estoy devolviendo una imagen */
    res.setHeader("Content-Type", "image/png");

    /* Leo la imagen a convertir o editar y la guardo en una variable */
    const imagen = await Jimp.read(
      "https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-3823495-640w.jpeg"
    );

    /* Edito la imagen de la variable, y guardo la imagen editada en un nuevo archivo */
    /* creo el nombre del archivo nuevo */
    const fecha = new Date();

    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();

    const fechaFormateada = `${dia}-${mes}-${año}`;

    let nuevo_nombre_archivo = fechaFormateada + "-imagenNueva" + ".png";
    /* ----------- */
    await imagen
      .resize(200, Jimp.AUTO) /* Cambio su tamaño */
      .sepia() /* Le pongo filtro */
      .writeAsync(
        nuevo_nombre_archivo
      ); /* Guardo la imagen editada => imagen.png */

    /* Leer el archivo de imagen creado */
    const imagenData = fs.readFileSync(nuevo_nombre_archivo);

    /* Envío la imagen de respuesta */
    res.send(imagenData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/* SERVIDOR LEVANTADO */
app.listen(PORT, () => {
  console.log("servidor en puerto :", PORT);
});
