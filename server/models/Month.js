const { DataTypes } = require("sequelize");
const {sequelize} = require('./Conn');

const Month = sequelize.define(
  "Month",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tone: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    validate: true,
    default: {
      allowNull: false,
    },
  }
);


module.exports = Month;