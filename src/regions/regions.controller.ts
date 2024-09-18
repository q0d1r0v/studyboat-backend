import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto, DeleteRegionDto } from './dto/dto.validation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('regions')
@Controller('api')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get('/regions')
  findAll() {
    return this.regionsService.findAll();
  }

  @Post('/admin/create-region')
  createRegion(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.createRegion(createRegionDto);
  }

  @Delete('/admin/delete/region')
  deleteRegion(@Query() query: DeleteRegionDto) {
    return this.regionsService.deleteRegion(query);
  }
}
