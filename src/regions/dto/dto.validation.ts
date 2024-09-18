import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRegionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class DeleteRegionDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
