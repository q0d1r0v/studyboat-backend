import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import {
  CreateCityDto,
  DeleteCityDto,
  GetCitiesDto,
} from './dto/dto.validation';

@ApiTags('cities')
@Controller('api')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('/cities')
  findAll(@Query() query: GetCitiesDto) {
    return this.citiesService.findAll(query);
  }

  @Post('/admin/create-city')
  createCity(@Body() body: CreateCityDto) {
    return this.citiesService.createCity(body);
  }

  @Delete('/admin/delete/city')
  deleteRegion(@Query() query: DeleteCityDto) {
    return this.citiesService.deleteCity(query);
  }
}
