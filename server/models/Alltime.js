const { DataTypes } = require("sequelize");
const {sequelize} = require('./Conn');

const Alltime = sequelize.define(
  "Alltime",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tone: {
      type: DataTypes.NUMBER(25),
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


module.exports = Alltime;