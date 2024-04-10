import pg from "pg";
const { Pool } = pg;
/* FORMA 1 */
// const config = {
//   connectionString: "postgresql://postgres:postgres@localhost:5432/jeans",
// };
// const pool = new Pool(config);

/* FORMA 2 =>EXTENDIDA */
// const config = {
//   user: "postgres",
//   host: "localhost",
//   database: "JEANS",
//   password: "1234",
//   port: 5432,
//   max: 20 /* Máximo de conecciones */,
//   min: 2 /* Mínimo de conecciones */,
//   idleTimeoutMillis: 30000 /* Tiempo permitido de inactividad */,
//   connectionTimeoutMillis: 2000 /* Tiempo de espera para conectarse */,
//   ssl:true,  /* permite definir si la conexión a la base de datos soporta un protocolo de transporte encriptado.Default = false */
// };
// const pool = new Pool(config);

/* FORMA 3  */
const config = {
  user: "postgres",
  host: "localhost",
  database: "JEANS",
  password: "1234",
  port: 5432,
  ssl: false,
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
  try {
    const result = await pool.query("SELECT * FROM ropa");
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//  getClothes();
/* --------------------OBTENER ROPA CON CURSOR------------------------------------------------ */
const getClothesCursor = async () => {
  const result = await pool.query("SELECT * FROM ropa");
  console.log(result.rows);
};

// getClothesCursor();

/* --------------------CREAR ROPA------------------------------------------------ */
const createClothes = async (nombre, color, talla) => {
  try {
    const text = `INSERT INTO ropa(nombre,color,talla) VALUES ($1, $2,$3)`;
    const values = [nombre, color, talla];
    const result = await pool.query(text, values);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

createClothes("remera", "azul", "SSSS");

/* --------------------ELIMINAR ROPA------------------------------------------------ */
const deleteClothes = async (talla) => {
  const text = `DELETE FROM ropa WHERE  talla = $1`;
  const values = [talla];
  const result = await pool.query(text, values);
  console.log(result);
};

//  deleteClothes("XS");

/* --------------------EDITAR TALLA DE ROPA POR ID DE ROPA------------------------------------------------ */
const editClothSizeById = async (tallaNueva, id) => {
  const text = `UPDATE ropa SET talla = $1 WHERE id = $2 `;
  const values = [tallaNueva, id];
  const result = await pool.query(text, values);
  console.log(result);
};

// editClothSizeById("XXXXL", 3);
