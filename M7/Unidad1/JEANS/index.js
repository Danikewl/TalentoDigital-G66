import pg from "pg";
const { Pool } = pg;
/* FORMA 1 */
// const config = {
//   connectionString: "postgresql://postgres:postgres@localhost:5432/jeans",
// };
// const pool = new Pool(config);

/* FORMA 2  */
const config = {
  user: "postgres",
  host: "localhost",
  database: "JEANS",
  password: "1234",
  port: 5432,
};
const pool = new Pool(config);
/* --------------------OBTENER FECHA------------------------------------------------ */

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result);
};

// getDate();

/* --------------------OBTENER ROPA------------------------------------------------ */
const getClothes = async () => {
  const result = await pool.query("SELECT * FROM ropa");
  console.log(result.rows);
};

// getClothes();

/* --------------------CREAR ROPA------------------------------------------------ */
const createClothes = async () => {
  const result = await pool.query(`  INSERT INTO ropa(nombre,color,talla) 
    VALUES ('jean con estampado','amarillo', 'S' ) RETURNING *    `);
  console.log(result.rows);
};

createClothes();
