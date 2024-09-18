import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetCoursesDto {
  @ApiProperty()
  @IsNotEmpty()
  school_id: number;

  @ApiProperty()
  @IsNotEmpty()
  page_number: number;
}

export class CreateCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  school_id: number;
}

export class UpdateCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  course_id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  description: string;
}

export class DeleteCourseDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
