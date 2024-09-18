import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetCitiesDto {
  @ApiProperty()
  @IsNotEmpty()
  region_id: number;
}

export class CreateCityDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  region_id: number;
}

export class DeleteCityDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
