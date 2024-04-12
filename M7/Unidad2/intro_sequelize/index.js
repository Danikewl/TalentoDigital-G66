const {
  URI_INTORPOL,
  PORT,
  HOST,
  DATABASE_NAME,
  USER,
  PASSWORD,
  DIALECT,
} = require("./variablesDeEntorno");
/* ----------------------------------------------- */
/* ------------INSTANCIAR SEQUELIZE--------------- */
/* ----------------------------------------------- */
const { Sequelize, DataTypes } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize(URI_INTORPOL, { logging: false }); // Example for postgres

// Option 2: Passing parameters separately (other dialects)
// const sequelize2 = new Sequelize(DATABASE_NAME, USER, PASSWORD, {
//   host: HOST,
//   dialect: DIALECT,
//   port: PORT,
//   logging: false
// });

/* ----------------------------------------------- */
/* ------------TEST DE CONECCIÓN SEQUELIZE-------- */
/* ----------------------------------------------- */
const testConection = async () => {
  try {
    await sequelize.authenticate();
    console.log("TEST DB PASADO");
  } catch (error) {
    console.error("ERROR: no se ha podido conectar a la DB: ", error);
  }
};

// testConection();

/* ----------------------------------------------- */
/* ---------------MODELOS SEQUELIZE--------------- */
/* ----------------------------------------------- */

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

/* ----------------------------------------------- */
/* ---------------DML/CRUD SEQUELIZE------------------- */
/* ----------------------------------------------- */
const getAllUsers = async () => {
  const dataUsers = await User.findAll();

  /* PARSEO LOS DATOS PARA VERLOS MAS BONITOS */
  const allUsers = await Promise.all(
    dataUsers.map(async (user) => user.toJSON())
  );

  console.log("USUARIOS====>", allUsers);
};

const createUser = async (name, lastName) => {
  const newUser = await User.create({ firstName: name, lastName: lastName });
  console.log("usuario Creado");
};

const updateUser = async (currentName, newName) => {
  const updatedUser = await User.update(
    {
      firstName: newName,
    },
    {
      where: {
        firstName: currentName,
      },
    }
  );
  console.log("usuario Editado =====>", updatedUser);
};

const deleteUser = async (name) => {
  const deletedUser = await User.destroy({
    where: {
      firstName: name,
    },
  });
  console.log("usuario Eliminado====>", deletedUser);
};

/* ----------------------------------------------- */
/* ---------------SYNC SEQUELIZE------------------ */
/* ----------------------------------------------- */
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Todos los modelos se han sincronizado.");
    console.log("Base de datos conectada.");

    // await createUser("Juan", "Pizarro");
    // await getAllUsers();
    // await deleteUser("Lautaro");
    // await updateUser("Jorge", "Carolina")
  } catch (error) {
    console.error("ERROR: no se ha podido conectar a la DB: ", error);
  }
};

syncDB();
