import { Request, Response } from "express";
import userService from "../services/user.service";

class HomeController {

    async index(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            res.status(400).json({ message: "El ID proporcionado no es válido." })
            return;
        }

        try {
            const data = await userService.show(Number(id));
            res.status(200).json(data);
            return;

        } catch (error) {
            res.status(500).json({ message: "Error interno del sistema." })
            return;
        }
    }
}

export default new HomeController();
