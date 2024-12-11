import { User } from "../models/user.model";

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

            return user;
        } catch (error) {
            throw new Error("Error interno del servidor.");
        }
    }

}

export default new LoginService();