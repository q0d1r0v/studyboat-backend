import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { RegionsModule } from './regions/regions.module';
import { CitiesService } from './cities/cities.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';
import { SchoolsService } from './schools/schools.service';
import { SchoolsController } from './schools/schools.controller';
import { SchoolsModule } from './schools/schools.module';
import { CourseService } from './course/course.service';
import { CourseController } from './course/course.controller';
import { CourseModule } from './course/course.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RegionsModule, CitiesModule, SchoolsModule, CourseModule, AuthModule],
  providers: [CitiesService, SchoolsService, CourseService, AuthService],
  controllers: [CitiesController, SchoolsController, CourseController, AuthController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/api/admin');
  }
}
