import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseService } from './course.service';
import {
  CreateCourseDto,
  DeleteCourseDto,
  GetCoursesDto,
  UpdateCourseDto,
} from './dto/dto.validation';

@ApiTags('courses')
@Controller('api')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('/courses')
  findAll(@Query() query: GetCoursesDto) {
    return this.courseService.findAll(query);
  }

  @Post('/admin/create-course')
  createCourse(@Body() body: CreateCourseDto) {
    return this.courseService.createCourse(body);
  }

  @Put('/admin/update-course')
  updateCourse(@Query() query: UpdateCourseDto) {
    return this.courseService.updateCourse(query);
  }

  @Delete('/admin/delete/course')
  deleteCourse(@Query() query: DeleteCourseDto) {
    return this.courseService.deleteCourse(query);
  }
}
