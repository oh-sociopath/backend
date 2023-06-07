import { DataSource } from 'typeorm';
import 'dotenv/config';


class Database {
    private dataSource;

    constructor() {
        this.dataSource = new DataSource({
            type: process.env.PG_TYPE as string as any,
            host: process.env.HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: "database",
            synchronize: true,
            entities: ["src/entity/**/*.ts"]
        })
    }

    async initialize() {
        return this.dataSource.initialize();
    }

    getRepository(entity: any) {
        return this.dataSource.getRepository(entity)
    }
}

export const database = new Database();
