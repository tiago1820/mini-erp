import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
    const data = "Olá mundo!";
    res.send(data);
});

export default app;