import pool from "../db.js";
/* QUERIES DE PRODUCTOS */
export const getAllProducts = async () => {
  try {
    const text = `SELECT * FROM products`;
    const result = await pool.query(text);
    return result.rows;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
