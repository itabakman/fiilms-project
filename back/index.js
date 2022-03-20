import express from "express";
import { config } from "dotenv";
import { router } from "./routes/index.js";
import cors from "cors";
import { dbConnection } from "./db.js";

const app = express();
config();

const start = () => {
  try {
    dbConnection.authenticate();
    dbConnection.sync();
    app.use(cors());
    app.use(express.json());

    app.use("/api", router);
    app.listen(process.env.PORT, () => {
      try {
        console.log(`Server started on port ${process.env.PORT}`);
      } catch (e) {
        console.error(e.message);
      }
    });
  } catch (e) {
    console.error(e.message);
  }
};

start();
