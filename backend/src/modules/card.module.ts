import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { JwtService } from '@nestjs/jwt';
import { CardService } from '../services/card.service';
import { CardQueries } from '../queries/card.queries';
import { CardController } from '../controllers/card.controller';
import StripeService from '../services/stripe.service';
import { TokenService } from '../services/token.service';

@Module({
  providers: [
    UserService,
    UserQueries,
    TokenService,
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
