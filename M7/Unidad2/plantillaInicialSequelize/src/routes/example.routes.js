const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { Example } = require("../db");

router.get("/", async (req, res) => {
  try {
    let example = await Example.findAll();

    res.status(200).json(example);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});

router.post("/", async (req, res) => {
  try {
    let example = await Example.create({ title: "título ejemplo" });

    res.status(200).json(example);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});





module.exports = router;
