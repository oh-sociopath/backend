import { userService } from '../services/userServices';

export class UserController {
    constructor() {
    }

    getAllUsers() {
        return userService.getAllUsers();
    }

    getUserById({ id }) {
        if(!id) {
            throw new Error('provide id');
        }
        return userService.getUserById(id);
    }

    createUser(body) {
        return userService.createUser(body);
    }

    async updateUser(body) {
        return await userService.updateUser(body);
    }

    deleteUser({ id }) {
        return userService.deleteUser(id);
    }
}
