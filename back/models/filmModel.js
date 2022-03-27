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
    defaultValue: null,
  },
  duration: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  imdb: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  budget: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
});
