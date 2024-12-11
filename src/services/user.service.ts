
class User {

    isLogged() {
        const logged = false;

        if(!logged) {
            return false;
        }

        return true;
    }

}

export default new User();