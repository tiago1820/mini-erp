import { Request, Response } from "express";
import LoginService from "../services/login.service";

class LoginController {

    async index(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        if (!email) {
            res.status(400).json({ message: "El campo 'email' es obligatorio." });
            return;
        }

        if (!password) {
            res.status(400).json({ message: "El campo 'password' es obligatorio." });
            return;
        }

        const user = await LoginService.index(email, password);
        console.log("AQUI: ", user);
        

        if (!user) {
            res.status(401).json({ message: "Credenciales inválidas." });
            return;
        }

        const data = { message: "Login exitoso.", user };
        res.status(200).json(data);
        return;

    }

}

export default new LoginController();