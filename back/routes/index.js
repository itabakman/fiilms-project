import { Router } from "express";
import { filmRouter } from "./filmRouter.js";
export const router = Router();

router.use('/film', filmRouter);