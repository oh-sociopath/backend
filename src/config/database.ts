import { DataSource } from 'typeorm';

class Database {
    private dataSource;

    constructor() {
        this.dataSource = new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "username",
            password: "password",
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
