import pool from "../db.js";


/* QUERIES DE TESTEO */
export const testDB = async () => {
  try {
    const text = `SELECT NOW()`;
    const result = await pool.query(text);
    return result.rows;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};


