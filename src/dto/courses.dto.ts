import { IsNotEmpty } from "class-validator";

// untuk insert dan update
export class CoursesDto{
    @IsNotEmpty()
    course: string;

    @IsNotEmpty()
    mentor: string;

    @IsNotEmpty()
    title: string;
}