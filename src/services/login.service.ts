import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { JWT_SECRET, JWT_EXPIRATION } from "../config/configjwt";

class LoginService {

    async index(email: string, password: string) {
        try {
            const user = await User.findOneBy({ email });
            if (!user) {
                return false;
            }

            const isPasswordValid = user.password === password;
            if (!isPasswordValid) {
                return false;
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRATION }
            );

            return { user, token };
        } catch (error) {
            throw new Error("Error interno del servidor.");
        }
    }

}

export default new LoginService();