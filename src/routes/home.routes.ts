import express from "express";
import AuthMiddleware from "../middlewares/auth.middleware";
import HomeController from "../controllers/home.controller";
const router = express.Router();

router.get("/", AuthMiddleware.verifyToken, HomeController.index);

// router.route("/:id")
//     .get(AuthMiddleware.verifyToken, HomeController.index)

export default router;
