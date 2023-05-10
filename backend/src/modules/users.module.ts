import { Module } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { PrismaModule } from './prisma.module';
import { UserQueries } from '../queries/user.queries';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from '../services/prisma.service';
import { TokenService } from '../services/token.service';
import StripeService from '../services/stripe.service';

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    UserQueries,
    PrismaService,
    TokenService,
    StripeService,
  ],
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
