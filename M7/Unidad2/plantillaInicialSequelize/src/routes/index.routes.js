const { Router } = require("express");
const router = Router();
const exampleRoutes = require("./example.routes");

/* GET DE EJEMPLO  localhost:3000/   */
router.get("/", (req, res) => {
  res.send("GET DE EJEMPLO A /");
});

/*definimos los endpoints en secciones */
router.use("/example", exampleRoutes);

module.exports = router;
