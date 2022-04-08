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
    type: DataTypes.STRING,
    defaultValue: null,
  },
  budget: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  year: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  language: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});
