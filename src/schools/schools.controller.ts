import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SchoolsService } from './schools.service';
import {
  CreateSchoolDto,
  DeleteSchoolDto,
  GetSchoolsDto,
} from './dto/dto.validation';

@ApiTags('schools')
@Controller('api')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get('/schools')
  findAll(@Query() query: GetSchoolsDto) {
    return this.schoolsService.findAll(query);
  }

  @Post('/admin/create-school')
  createSchool(@Body() body: CreateSchoolDto) {
    return this.schoolsService.createSchool(body);
  }

  @Delete('/admin/delete/school')
  deleteSchool(@Query() query: DeleteSchoolDto) {
    return this.schoolsService.deleteSchool(query);
  }
}
