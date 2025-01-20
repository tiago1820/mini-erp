import express from "express";
import AuthMiddleware from "../middlewares/auth.middleware";
import { logoutMiddleware } from "../middlewares/logout.middleware";
import HomeController from "../controllers/home.controller";
const router = express.Router();

router.get("/", AuthMiddleware.verifyToken, HomeController.index);


export default router;
