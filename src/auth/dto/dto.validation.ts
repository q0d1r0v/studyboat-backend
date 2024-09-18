import { IsNotEmpty } from 'class-validator';

export class CreateAminDto {
  @IsNotEmpty()
  auth_secret: string;
  @IsNotEmpty()
  full_name: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}

export class LoginAminDto {
  @IsNotEmpty()
  auth_secret: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
