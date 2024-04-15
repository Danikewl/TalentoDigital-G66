const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { pool } = require("../db");

router.get("/", async (req, res) => {
  try {
    let example = await pool.query("SELECT * FROM algo;")

    res.status(200).json(example);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});

router.post("/", async (req, res) => {
  try {
    let example = await pool.query("INSERT INTO Examples (title) VALUES ('TITULO PG EJEMPLO') ")

    res.status(200).json(example);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
});

module.exports = router;
