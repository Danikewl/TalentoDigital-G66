const Cursor = require("pg-cursor");
const pg = require("pg");
const { Pool, Client } = pg;

const config = {
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "JEANS",
};

const pool = new Pool(config);
const client = new Client(config);

const getClothes = async () => {
  const text = `SELECT * FROM ropa`;
  const consulta = new Cursor(text);
  const cursor = client.query(consulta);

  
  cursor.read(100, (err, rows) => {
    console.log(err);
    console.log(rows);
  });
};

getClothes();

/* -------------------CON MÓDULO--------------------------- */
// (async function ModuloBaseDeDatos() {
//   const text = `SELECT * FROM ropa`;
//   const { rows } = await pool.query(text);
//   console.log(rows);
// })();
