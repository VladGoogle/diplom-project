import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './users.service';
import { PasswordQueries } from '../queries/password.queries';
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';
import { ForgotPasswordDto } from '../dtos/forgotPassword.dto';

@Injectable()
export class PasswordService {
  constructor(
    private prisma: PrismaService,
    private passwordQueries: PasswordQueries,
    private userService: UserService,
    private mailerService: MailerService,
  ) {}

  async createPasswordResetToken(email: string) {
    try {
      const user = await this.userService.findUserByEmail(email);
      const token = Math.random().toString(36).slice(-8);
      await this.passwordQueries.createPasswordResetToken(token, user.id);
      const resetUrl = `http://localhost:3001/password/reset/${token}`;

      await this.mailerService.sendMail({
        to: email,
        subject: 'Password Reset',
        template: 'password-reset',
        context: {
          resetUrl,
        },
      });
      return token;
    } catch (e) {
      throw e;
    }
  }

  async resetPassword(data: ForgotPasswordDto, token) {
    const passwordResetToken =
      await this.passwordQueries.findPasswordResetToken(token);
    await this.passwordQueries.setNewPassword(data, passwordResetToken.user.id);
    await this.passwordQueries.deletePasswordTokenById(passwordResetToken.id);
  }
}
