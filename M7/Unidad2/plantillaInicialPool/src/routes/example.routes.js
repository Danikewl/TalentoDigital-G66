const { Router } = require("express");
const router = Router(); //localhost:3000/category
const { pool } = require("../db");
const {
  getExamples,
  createExample,
  editExample,
  deleteExample,
  getExamplesById,
} = require("../controllers/example.controllers");

/* GET => CONSULTA */
router.get("/", getExamples);

/* GET BY TITLE => CONSULTA */
router.get("/:title", getExamplesById);

/* POST => CREAR */
router.post("/", createExample);

/* PATCH O PUT => EDITAR */
router.put("/", editExample);

/* DELETE => ELIMINAR */
router.delete("/:title", deleteExample);

module.exports = router;
