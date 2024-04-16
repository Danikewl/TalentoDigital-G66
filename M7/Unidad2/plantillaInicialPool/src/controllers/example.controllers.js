const { pool } = require("../db");

/* GET => CONSULTAR */
const getExamples = async (req, res) => {
  try {
    let result = await pool.query("SELECT * FROM algo;");

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* GET BY SMTHNG => CONSULTAR POR ALGUN PARAMETRO EN PARTICULAR */
const getExamplesById = async (req, res) => {
  try {
    const { title } = req.params;

    const values = [title];
    let queryExample = "SELECT * FROM algo WHERE title = $1";

    const result = await pool.query(queryExample, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* POST => CREAR */
const createExample = async (req, res) => {
  try {
    const { title } = req.body;

    const values = [title];
    let queryExample = "INSERT INTO algo (title) VALUES ($1) RETURNING *";

    const result = await pool.query(queryExample, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* PATCH O PUT => EDITAR */

const editExample = async (req, res) => {
  try {
    const { newTitle, oldTitle } = req.body;

    const values = [newTitle, oldTitle];
    let queryExample = "UPDATE algo SET title = $1 WHERE title = $2 RETURNING *";

    const result = await pool.query(queryExample, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};

/* DELETE => ELIMINAR */
const deleteExample = async (req, res) => {
  try {
    const { title } = req.params;

    const values = [title];
    let queryExample = "DELETE FROM algo WHERE title = $1 RETURNING *";

    const result = await pool.query(queryExample, values);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error buscando los productos");
  }
};


module.exports = {
  getExamples,
  getExamplesById,
  createExample,
  editExample,
  deleteExample,
};
