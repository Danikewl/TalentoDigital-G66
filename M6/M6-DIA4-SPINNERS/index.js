const express = require("express");
const app = express();
const PORT = 3000;
const exphbs = require("express-handlebars");

/* HANDLEBARS SETTINGS */
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
  })
);
app.set("view engine", "handlebars");

/* BOOTSTRAP MIDDLEWARE */
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

/* RUTA GET */
app.get("/:color", function (req, res) {
  const { color } = req.params;
  const nombre = "Felipe";

  res.render("Inicio", {
    layout: "Inicio",
    colores: [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
    color: color,
    nombre: nombre,
  });
});

/* LEVANTO EL SERVIDOR */
app.listen(PORT, () => {
  console.log(`SERVIDOR LEVANTADO EN EL PUERTO ${PORT}`);
});
