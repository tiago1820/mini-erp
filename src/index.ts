import app from "./app";
import { AppDataSource } from "./databases/connection";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected.");
        app.listen(3000, () => {
            console.log("Server running.");
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

main();