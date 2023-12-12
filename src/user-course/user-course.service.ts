import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/courses.entity';
import { Repository } from 'typeorm';
import { UserCourse } from './usrCourse.entity';

@Injectable()
export class UserCourseService {
    constructor(@InjectRepository(UserCourse) private crsRepo: Repository<UserCourse>){}
    // get users with course
    async getUsersWithCourse(){
        // const a = this.crsRepo.find({relations: ['usrNew']})
        // console.log(`Test ${a}`);
        return this.crsRepo.createQueryBuilder('userCourse').leftJoinAndSelect("userCourse.id_user","users").leftJoinAndSelect("userCourse.id_course","courses").select(['users.username', 'courses.title']).getMany();
    }
}
