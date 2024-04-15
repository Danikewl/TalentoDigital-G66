const app = require("./src/app");
const { sequelize } = require("./src/db");
const SERVER_PORT = 3000;

sequelize
  .sync({ force: false })
  .then(
    app.listen(SERVER_PORT, () => {
      console.log(
        `El servidor se inició correctamente en el puerto: ${SERVER_PORT}`
      );
    })
  );
