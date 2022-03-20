import { dbConnection } from "../db.js";
import { DataTypes } from "sequelize";

export const Film = dbConnection.define("film", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
});
