import express from "express";
import HomeController from "../controllers/home.controller";
import AuthMiddleware from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/", AuthMiddleware.isAuthenticated, HomeController.index);

router.route("/:id")
    .get(AuthMiddleware.isAuthenticated, HomeController.index)

export default router;
