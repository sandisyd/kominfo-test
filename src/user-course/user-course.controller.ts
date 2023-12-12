import { Controller, Get } from '@nestjs/common';
import { UserCourseService } from './user-course.service';

@Controller('user-course')
export class UserCourseController {
    constructor(private usrCourse: UserCourseService){}

    @Get('user_course')
    async getUserAll(){
        return this.usrCourse.getUsersWithCourse()
    }
}
