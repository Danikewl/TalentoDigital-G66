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


/* LEVANTAR SERVIDOR */
app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
