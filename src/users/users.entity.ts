import { UserCourse } from "src/user-course/usrCourse.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    username: string;

    @Column({length: 50})
    email: string;

    @Column({length: 50})
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToMany(()=> UserCourse, userCrs => userCrs.id_user)
    usrNew: UserCourse[];

}