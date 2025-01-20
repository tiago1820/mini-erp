import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/configjwt";
import { isTokenRevoked } from "../config/tokenBlacklist";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
            };
        }
    }
}

class AuthMiddleware {

    verifyToken(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const token = authHeader.split(" ")[1];

        if(isTokenRevoked(token)){
            res.status(401).json({ message: "Token revocado, por favor inicia sesión de nuevo." });
            return;
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & { id: number; email: string };
            req.user = { id: decoded.id, email: decoded.email };
            console.log("AQUILOCO:", req.user);
            
            next();
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                res.status(401).json({ message: "Token expirado, por favor inicia sesión de nuevo." });
            } else {
                res.status(401).json({ message: "Token inválido." });
            }
        }
    }
}

export default new AuthMiddleware();
