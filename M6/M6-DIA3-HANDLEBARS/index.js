const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

/* CONFIGURACIÓN DEL MOTOR DE PLANTILLAS */
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
  })
);

/* RUTAS GET */
app.get("/", (req, res) => {
  res.render("main");
});

/* RUTAS GET */
app.get("/products", (req, res) => {
  res.render("products");
});

/* LEVANTAR SERVIDOR */
app.listen(3000, () => {
  console.log("Servidor levantado");
});
