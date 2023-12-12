import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { UserCourseModule } from './user-course/user-course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UsersModule, CoursesModule, UserCourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
