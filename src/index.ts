import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { usersRouter } from './routes/usersRouter';
import "reflect-metadata";
import { DataSource } from 'typeorm';
import { database } from './config/database';


const app = express();
dotenv.config();



const PORT = process.env.PORT || 5003;
app.use(express.json());

app.use('/users', usersRouter);


database.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch(error => console.log('Error during initializing the database', error))


