import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "dinero_azul",
  port: 5432,
});

const transactionExample = async () => {
  try {
    // Paso inicial => Iniciar la transacción
    console.log("BEGIN START");
    await pool.query("BEGIN");

    const descontar =
      "UPDATE usuarios SET saldo = saldo - 10000 WHERE email = 'fghfghfghf@cox.net' RETURNING *";
    const clienteDescontado = await pool.query(descontar);

    const acreditar =
      "UPDATE usuarios SET saldo = saldo + 10000 WHERE email = 'yuki_whsdfsdfsdfsdbrey@aol.com' RETURNING *";
    const clienteAcreditado = await pool.query(acreditar);



 

    if (!clienteAcreditado.rowCount || !clienteDescontado.rowCount) {
      const rollback = "ROLLBACK";
      await pool.query(rollback);
      console.log({
        status: "Error",
        message: "La operación ha sido anulada",
        code: 500,
        emisor: clienteDescontado.rows[0],
        receptor: clienteAcreditado.rows[0],
      });
    } else {
      pool.query("INSERT INTO transferencias, saldo=10000, comprador:cuentaComprador , vendedor: cuentaVEndedor  ")

      console.log({
        status: "Ok",
        message: "Operación realizada con éxito.",
        code: 200,
        emisor: clienteDescontado.rows[0],
        receptor: clienteAcreditado.rows[0],
      });
    }

    // Paso final => Finalizar la transacción
    await pool.query("COMMIT");
    console.log("COMMIT END");

    return { clienteAcreditado, clienteDescontado };
  } catch (error) {
    await pool.end();
    return console.log({
      message: error.message,
      code: error.code,
      detail: error.detail,
      constraint: error.constraint,
      mensajeDelProgramador: "¿Que estas haciendo?",
    });
  }
};

transactionExample();
