import pool from "../db.js";
/* QUERIES DE USUARIOS */
export const getAllUsers = async () => {
  try {
    const text = `SELECT * FROM users`;
    const result = await pool.query(text);
    return result.rows;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};
