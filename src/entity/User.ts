import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique('UQ_EMAIL', ['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    first_name: string

    @Column({type: 'varchar'})
    last_name: string

    @Column({type: 'varchar'})
    email: string

    @Column({type: 'varchar'})
    password: string

    @Column({type: 'timestamp'})
    created_at: Date

    @Column({type: 'timestamp'})
    updated_at: Date
}
