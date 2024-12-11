import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import homeRoutes from "./routes/home.routes";
import loginRoutes from "./routes/login.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/home", homeRoutes);
app.use("/api/login", loginRoutes);







export default app;