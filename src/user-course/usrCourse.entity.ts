import { Courses } from "src/courses/courses.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usercourse"})
export class UserCourse{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Users)
    @JoinColumn({name: "id_user"})
    id_user: Users;
    
    @ManyToOne(()=> Courses)
    @JoinColumn({name: "id_course"})
    id_course: Courses;
}