import { Request, Response } from "express";

class PermissionController {

    async index(req: Request, res: Response): Promise<void> {

        try {
            const data = "";

            res.status(200).json(data);
            return;

        } catch (error) {
            res.status(500).json({ message: "Error interno del sistema." })
            return;
        }
    }

}

export default new PermissionController();

