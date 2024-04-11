const pg = require("pg");
const { Pool } = pg;
const createRopa = require("./createRopa.json");
const ropaQueries = require("./RopaQueries.json");

const config = {
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "JEANS",
};

const pool = new Pool(config);

const createCloth = async (nombre, color) => {

  const result = await pool.query(createRopa);
  return console.log(result);
};

export const getAllClothes = async () => {
  const result = await pool.query(ropaQueries.selectAllClothes);
  return console.log(result);
};

let objeto = {
  text: "SELECT * FROM ropa",
  values: ["valores"],
};
