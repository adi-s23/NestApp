import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Temp extends Model{
    @Column
    roll: number
    @Column
    name: string
    @Column
    age: number
}