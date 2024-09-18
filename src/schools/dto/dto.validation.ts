import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetSchoolsDto {
  @ApiProperty()
  @IsNotEmpty()
  city_id: number;
}

export class CreateSchoolDto {
  @ApiProperty()
  @IsNotEmpty()
  city_id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}

export class DeleteSchoolDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
