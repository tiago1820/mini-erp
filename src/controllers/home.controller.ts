import { Request, Response } from "express";
import userService from "../services/user.service";

class HomeController {

    async index(req: Request, res: Response): Promise<void> {
        const user = req.user;

        if (!user) {
            res.status(401).json({ message: "Usuario no autenticado." });
            return;
        }

        try {
            const data = await userService.show(Number(user.id));

            if (!data) {
                res.status(404).json({ message: "Usuario no encontrado." });
                return;
            }
            
            res.status(200).json(data);
            return;

        } catch (error) {
            res.status(500).json({ message: "Error interno del sistema." })
            return;
        }
    }
}

export default new HomeController();
