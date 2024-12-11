import { Request, Response } from "express";

class HomeController {
    async index(req: Request, res: Response) {
        res.status(200).json("Hola mundo");
    }
}

export default new HomeController();
