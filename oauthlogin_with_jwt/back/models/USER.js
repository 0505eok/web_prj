const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "USER",
    {
      ID: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      NAME: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "USER",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "ID" }],
        },
      ],
    }
  );
};
