import { Request, Response } from "express";
import LoginService from "../services/login.service";

class LoginController {

    async index(req: Request, res: Response) {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ message: "El campo 'email' es obligatorio." });
        }

        if (!password) {
            return res.status(400).json({ message: "El campo 'password' es obligatorio." });
        }

        const user = await LoginService.index(email, password);
        console.log("AQUI: ", user);
        

        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }

        const data = { message: "Login exitoso.", user };
        res.status(200).json(data);

    }

}

export default new LoginController();