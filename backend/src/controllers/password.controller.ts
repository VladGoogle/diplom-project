import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { PasswordService } from '../services/password.service';
import { ForgotPasswordDto } from '../dtos/forgotPassword.dto';

@Controller('password')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Post('forgot')
  async forgotPassword(@Body('email') email: string) {
    await this.passwordService.createPasswordResetToken(email);
    return { message: 'Password reset email sent' };
  }

  @Get('reset/:token')
  async getPasswordResetToken(@Param('token') token: string) {
    return { token };
  }

  @Patch('reset/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body() data: ForgotPasswordDto,
  ) {
    await this.passwordService.resetPassword(data, token);
    return { message: 'Password reset successfully' };
  }
}

// - `/password/forgot`: Sends a password reset email to the user's email address.
// - `/password/reset/:token`: Displays a form for the user to enter their new password. The `:token` parameter is the password reset token.
// - `/password/reset/:token` (with HTTP method `PATCH`): Resets the user's password using the provided `:token` and the new password from the request body.
