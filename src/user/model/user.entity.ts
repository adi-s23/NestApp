import { Column, DataType, Model, Table } from "sequelize-typescript"
@Table
export class User extends Model{
    @Column({
        field: 'email',
        type: DataType.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        field: 'name',
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.BIGINT,
        field: 'session_id'
    })
    sessionId: bigint

    @Column({
        type: DataType.STRING,
        field: 'password'
    })
    password: string
}