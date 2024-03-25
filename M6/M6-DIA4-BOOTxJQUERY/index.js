const express = require("express");
const app = express();
const PORT = 3000;

/* STATIC */
app.use(express.static("public"));

/* MIDDLEWARES */
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

/* RUTA GET */
app.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "/public/index.html");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`SERVIDOR LEVANTADO EN EL PUERTO ${PORT}`);
});
