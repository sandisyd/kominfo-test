import { UserCourse } from "src/user-course/usrCourse.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Courses{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    course: string;

    @Column({length: 50})
    mentor: string;

    @Column({length: 50})
    title: string;

    @OneToMany(()=> UserCourse, crs => crs.id_course)
    crsNew: UserCourse[];

}