import {BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import { compare, hash } from 'bcrypt'

@Entity("user")
export class User extends BaseEntity{


        @PrimaryGeneratedColumn()
        id: number

        @Column()
        name: string

        @Column({unique: true})
        email: string

        @Column()
        password: string

        @BeforeInsert()
        async hashPassword() {
            return (this.password = await hash(this.password, 10));
          }
          async compare(pass: string) {
            return await compare(pass, this.password);
          }
}