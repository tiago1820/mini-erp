import { Request, Response, NextFunction } from "express";
import User from "../services/user.service";

class AuthMiddleware {
    isAuthenticated (req: Request, res: Response, next: NextFunction) : void {
        if (!User.isLogged()) {
            res.status(401).json({message: "Unauthorized"});
            return;
        }
        next();
    }
}

export default new AuthMiddleware();
