import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesDto } from '../dto/courses.dto';

@Controller('courses')
export class CoursesController {
    constructor(private courseService: CoursesService){}
    // Read atau get courses
    @Get('all_course')
    async getCourseAll(){
        return this.courseService.getCourse()
    }

    // Create courses
    @Post('insert_course')
    async insertUser(@Body() insertCourse: CoursesDto){
        return await this.courseService.CourseCreate(insertCourse)
    }

    // Update courses
    @Post('update_course/:id')
    async updateUsers(@Param('id') id: number, @Body() courseUpdate: CoursesDto){
        return this.courseService.updateCourse(id, courseUpdate);
    }

    // Delete courses
    @Delete('delete_course/:id')
    async deleteCourse(@Param('id') id: number){
        await this.courseService.deleteCourse(id);
        return {message: "Data berhasil dihapus"}
    }
}
