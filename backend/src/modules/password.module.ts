import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import StripeService from '../services/stripe.service';
import { PasswordQueries } from '../queries/password.queries';
import { PasswordService } from '../services/password.service';
import { PasswordController } from '../controllers/password.controller';
import { TokenService } from '../services/token.service';

@Module({
  providers: [
    PasswordQueries,
    PasswordService,
    PrismaService,
    UserService,
    UserQueries,
    TokenService,
    StripeService,
  ],
  exports: [PasswordService],
  controllers: [PasswordController],
})
export class PasswordModule {}
