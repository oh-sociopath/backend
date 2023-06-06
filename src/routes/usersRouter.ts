import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

export const usersRouter = express.Router();
const userController = new UserController();

usersRouter.get('/', async (req, res) => {
    res.json(
        await userController.getAllUsers()
    );
});

usersRouter.get('/:id', async (req, res) => {
    res.json(
        await userController.getUserById(req.params)
    );
});

usersRouter.post('/', (req, res) => {
    res.json(userController.createUser(req.body));
});

usersRouter.patch('/:id', async (req, res) => {
    res.json(
        await userController.updateUser({...req.params, ...req.body})
    );
});

usersRouter.delete('/:id', (req, res) => {
    res.json(
        userController.deleteUser(req.params)
    );
});
