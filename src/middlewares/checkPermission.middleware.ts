import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/configjwt";
import jwt from "jsonwebtoken";

const checkPermission = (requiredPermission: string) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(400).json({ message: "Token requerido para acceder a esta ruta." });
            return;
        }

        try {
            const decoded: any = jwt.verify(token, JWT_SECRET);
            console.log("Decoded token:", decoded);


            const permissions = decoded.permissions || [];

            console.log("Permissions extracted from token:", permissions);


            if (!permissions.includes(requiredPermission)) {
                res.status(403).json({ message: `No tiene permiso para acceder a esta ruta.` });
                return;
            }

            next();
        } catch (error) {
            res.status(401).json({ message: "Token inválido o expirado." });
            return;
        }
    }
}

export { checkPermission };
