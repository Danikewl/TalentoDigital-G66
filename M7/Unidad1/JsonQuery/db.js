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
  const text= "INSERT INTO ropa (nombre,color,talla) VALUES ($1,$2,$3)"
  const values= ["remera", "celeste", "XL"]
  const result = await pool.query(text, values);
  return console.log(result);
};

export const getAllClothes = async () => {
  const result = await pool.query({
    text: "SELECT * FROM ropa",
  });
  return console.log(result);
};




