import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Card } from '@prisma/client';
import { UserService } from './users.service';
import { CardDto } from '../dtos/card.dto';
import { CardQueries } from '../queries/card.queries';
import { UpdateCardDto } from '../dtos/updateCard.dto';
import StripeService from './stripe.service';
import { TokenService } from './token.service';

@Injectable()
export class CardService {
  constructor(
    private prisma: PrismaService,
    private cardQueries: CardQueries,
    private userService: UserService,
    private tokenService: TokenService,
    private stripeService: StripeService,
  ) {}

  async addCard(data: CardDto, authHeader: string): Promise<Card> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload.email);
    await this.cardQueries.addCard({
      ...data,
      userId: user.id,
    });

    const cardSource = await this.stripeService.createCardToken(
      user.customerToken,
      'tok_mastercard',
    );

    return this.prisma.card.update({
      where: { userId: user.id },
      data: {
        cardToken: 'tok_mastercard',
        cardSource: cardSource.id,
      },
      include: {
        payments: true,
      },
    });
  }

  async deleteCardByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.cardQueries.deleteCardByUserId(decodedPayload.id);
  }

  async getCardByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.cardQueries.getCardByUserId(decodedPayload.id);
  }

  async updateCardInfo(data: UpdateCardDto, authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload.email);
    await this.cardQueries.updateCardInfo(user.id, data);
    const cardSource = await this.stripeService.createCardToken(
      user.customerToken,
      'tok_mastercard',
    );

    return this.prisma.card.update({
      where: { userId: user.id },
      data: {
        cardToken: 'tok_mastercard',
        cardSource: cardSource.id,
      },
      include: {
        payments: true,
      },
    });
  }
}
