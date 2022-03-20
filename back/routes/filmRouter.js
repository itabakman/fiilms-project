import { Router } from "express";
import { FilmController } from "../controllers/index.js";
const filmController = new FilmController();

export const filmRouter = new Router();

filmRouter.get("/:slug", filmController.get);

filmRouter.post("/", filmController.create);

filmRouter.patch("/", filmController.patch);

filmRouter.get("/", filmController.getAll);
