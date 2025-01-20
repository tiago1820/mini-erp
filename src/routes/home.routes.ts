import express from "express";
import AuthMiddleware from "../middlewares/auth.middleware";
import { checkPermission } from "../middlewares/checkPermission.middleware";
import HomeController from "../controllers/home.controller";
const router = express.Router();

router.get("/", checkPermission("home"), AuthMiddleware.verifyToken, HomeController.index);

export default router;
