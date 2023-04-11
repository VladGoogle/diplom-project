import { Controller, Body, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../dtos/user.dto';
import { LoginDto } from '../dtos/auth.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() loginBody: LoginDto) {
    return await this.authService.signIn(loginBody);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.signUp(user);
  }
}
