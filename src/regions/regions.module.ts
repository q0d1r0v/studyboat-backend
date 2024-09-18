import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';

@Module({
  providers: [RegionsService],
  controllers: [RegionsController],
})
export class RegionsModule {}
