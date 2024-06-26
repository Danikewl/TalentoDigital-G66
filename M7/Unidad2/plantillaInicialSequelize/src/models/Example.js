const { DataTypes } = require("sequelize");
//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ

module.exports = (sequelize) => {
  
  sequelize.define(
    "Example",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },




    },
    { timestamps: true }/* Crea las columnas createdAt y updatedAt */
  );


};
