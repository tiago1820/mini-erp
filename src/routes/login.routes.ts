import express from "express";
import loginController from "../controllers/login.controller";
const router = express.Router();

router.get("/", loginController.index);

export default router;