const PORT = 5432;
const HOST = "localhost";
const DATABASE_NAME = "miMarket_Sequelize";
const USER = "postgres";
const PASSWORD = "1234";
const DIALECT = "postgres";
const URI_TRAD = "postgres://postgres:1234@localhost:5432/miMarket_Sequelize"
const URI_INTORPOL = `${DIALECT}://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE_NAME}`
// const URI_EJEMPLO = "postgres://user:pass@example.com:5432/dbname"

module.exports = { PORT, HOST, DATABASE_NAME, USER, PASSWORD, DIALECT ,URI_INTORPOL};
