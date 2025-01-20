import { Request, Response } from "express";
import LoginService from "../services/login.service";
import { revokeToken } from "../config/tokenBlacklist";
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

        const result = await LoginService.index(email, password);
        console.log("AQUI: ", result);


        if (!result) {
            res.status(401).json({ message: "Credenciales inválidas." });
            return;
        }

        const { user, token } = result;

        const data = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        };

        res.status(200).json(data);
        return;

    }

    async logout(req: Request, res: Response): Promise<void> {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(400).json({ message: "Token requerido para cerrar sesión." });
            return;
        }

        revokeToken(token);

        res.status(200).json({ message: "Sesión cerrada correctamente." });

    }

}

export default new LoginController();