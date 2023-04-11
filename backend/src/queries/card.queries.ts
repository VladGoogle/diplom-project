import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CartItemDto } from '../dtos/cartItem.dto';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';
import { CardDto } from '../dtos/card.dto';
import { identity } from 'rxjs';
import { UpdateCardDto } from '../dtos/updateCard.dto';

@Injectable()
export class CardQueries {
  constructor(private prisma: PrismaService) {}

  async addCard(data: CardDto) {
    try {
      return await this.prisma.card.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getCardById(id: number) {
    try {
      return await this.prisma.card.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Card doesn't exist`);
        }
      }
      throw e;
    }
  }

  async getCardByUserId(id: number) {
    try {
      return await this.prisma.card.findUniqueOrThrow({
        where: { userId: id },
        include: {
          payments: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Card doesn't exist`);
        }
      }
      throw e;
    }
  }

  async updateCardInfo(id: number, data: UpdateCardDto) {
    try {
      return await this.prisma.card.update({
        where: { userId: id },
        data: {
          ...data,
        },
        include: {
          payments: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Card doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteCardByUserId(id: number) {
    try {
      const card = await this.prisma.card.delete({
        where: { userId: id },
      });
      return { message: `Card with id: ${card.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Card doesn't exist`);
        }
      }
      throw e;
    }
  }
}
