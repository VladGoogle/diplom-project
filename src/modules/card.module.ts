import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { AuthService } from '../services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { CardService } from '../services/card.service';
import { CardQueries } from '../queries/card.queries';
import { CardController } from '../controllers/card.controller';
import StripeService from '../services/stripe.service';

@Module({
  providers: [
    UserService,
    UserQueries,
    AuthService,
    PrismaService,
    JwtService,
    CardService,
    CardQueries,
    StripeService,
  ],
  exports: [CardService],
  controllers: [CardController],
})
export class CardModule {}
