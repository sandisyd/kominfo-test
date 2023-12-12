import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from './courses.entity';
import { Repository } from 'typeorm';
import { CoursesDto } from '../dto/courses.dto';

@Injectable()
export class CoursesService {
    constructor(@InjectRepository(Courses) private courseRepo: Repository<Courses>){}

    // Create courses
    async CourseCreate(insertCourses: CoursesDto){
        const dataUsers = this.courseRepo.create(insertCourses);
        await this.courseRepo.save(dataUsers)
        return dataUsers;
    }

    // get all courses

    async getCourse(){
        return await this.courseRepo.find();
    }

    // udpate courses
    async updateCourse(id: number, updateData: CoursesDto){
        await this.courseRepo.update(id, updateData)
        return await this.courseRepo.findOne({where: {id}})
    }

    // delete courses
    async deleteCourse(id: number){
        if (id === null) {
            return "Data user tidak ada"
        }
        return this.courseRepo.delete(id);
    }
}
