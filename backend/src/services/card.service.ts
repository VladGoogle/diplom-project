import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Card, Cart, CartItem, Comment } from '@prisma/client';
import { UserService } from './users.service';
import { AuthService } from './auth.service';
import { CardDto } from '../dtos/card.dto';
import { CardQueries } from '../queries/card.queries';
import { UpdateCardDto } from '../dtos/updateCard.dto';
import StripeService from './stripe.service';

@Injectable()
export class CardService {
  constructor(
    private prisma: PrismaService,
    private cardQueries: CardQueries,
    private userService: UserService,
    private authService: AuthService,
    private stripeService: StripeService,
  ) {}

  async addCard(data: CardDto, authHeader: string): Promise<Card> {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);

    const card = await this.cardQueries.addCard({
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
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cardQueries.deleteCardByUserId(user.id);
  }

  async getCardByUserId(authHeader: string) {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cardQueries.getCardByUserId(user.id);
  }

  async updateCardInfo(data: UpdateCardDto, authHeader: string) {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);

    const card = await this.cardQueries.updateCardInfo(user.id, data);
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
