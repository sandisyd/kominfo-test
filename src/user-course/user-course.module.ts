import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourse } from './usrCourse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCourse])],
  providers: [UserCourseService],
  controllers: [UserCourseController]
})
export class UserCourseModule {}
