import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/configjwt";

const revokedTokens: Set<string> = new Set();

const logoutMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token requerido." });
    }

    try {
        if (revokedTokens.has(token)) {
            return res.status(401).json({ message: "Sesión cerrada. Token revocado." });
        }

        jwt.verify(token, JWT_SECRET);

        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido o expirado." });
    }
};

const revokeToken = (token: string) => {
    revokedTokens.add(token);
}

export { logoutMiddleware, revokeToken };
