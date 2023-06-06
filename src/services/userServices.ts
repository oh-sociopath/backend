import { database } from '../config/database';
import { User } from '../entity/User';

class UserService {
    constructor() {
    }

    async getAllUsers() {
        const userRepository = database.getRepository(User);
        const users = await userRepository.find({});
        return users;
    }

    async getUserById(id) {
        const userRepository = database.getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: Number(id)
            }
        });

        return user;
    }

    async createUser(body) {
        const userRepository = database.getRepository(User);

        const user = new User();
        user.first_name = body.first_name;
        user.last_name = body.last_name;
        user.email = body.email;
        user.password = body.password;
        user.created_at = new Date();
        user.updated_at = new Date();

        await userRepository.save(user);
        console.log('created');

        return user.id;
    }

    async updateUser(body) {
        const {id, ...other} = body

        const userRepository = database.getRepository(User);
        await userRepository
            .createQueryBuilder()
            .update(User)
            .set({
                ...other
            })
            .where("id = :id", {id: Number(id)})
            .execute()

        return `user with id: ${id} updated`
    }

    async deleteUser(id) {
        const userRepository = database.getRepository(User);
        await userRepository
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", {id: Number(id)})
            .execute()

        return `user with id ${id} deleted`;
    }
}

export const userService = new UserService();
