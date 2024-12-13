import { User } from "../models/user.model";

class UserService {

    isLogged() {
        const logged = true;

        if (!logged) {
            return false;
        }

        return true;
    }

    logout() { }

    async show(id: number) {
        try {
            const user = await User.findOne({
                where: { id },
                relations: ["company"]
            });

            if (!user) {
                throw new Error(`User with ID ${id} not found.`);
            }
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                company: user.company
                    ? {
                        id: user.company.id,
                        name: user.company.name,
                    } : null,
            };
        } catch (error) {
            throw new Error(`Error retrieving user with ID ${id} from database`);
        }
    }
}

export default new UserService();