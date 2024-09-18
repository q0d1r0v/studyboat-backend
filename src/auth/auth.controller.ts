import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAminDto, LoginAminDto } from './dto/dto.validation';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body: CreateAminDto) {
    return this.authService.rgister(body);
  }

  @Post('/login')
  createCity(@Body() body: LoginAminDto) {
    return this.authService.login(body);
  }
}
