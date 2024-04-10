import pg from "pg";
const { Pool } = pg;

const config = {
  user: "postgres",
  host: "localhost",
  database: "ejemplo_modu",
  password: "1234",
  port: 5432,
  ssl: false,
};

const pool = new Pool(config);

export default pool;
