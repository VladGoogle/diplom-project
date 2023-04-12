import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { OrderDto } from '../dtos/order.dto';
import { Prisma } from '@prisma/client';
import { CartService } from '../services/cart.service';

@Injectable()
export class PasswordQueries {
  constructor(private prisma: PrismaService) {}

  async createPasswordResetToken(token: string, userId: number) {
    try {
      return await this.prisma.passwordResetToken.create({
        data: {
          token: token,
          userId: userId,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findPasswordResetToken(token: string) {
    try {
      return await this.prisma.passwordResetToken.findUniqueOrThrow({
        where: { token: token },
        include: {
          user: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Token doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deletePasswordTokenById(id: number) {
    try {
      const token = await this.prisma.passwordResetToken.delete({
        where: { id: id },
        include: {
          user: true,
        },
      });
      return { message: `Token with id:${token.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Token doesn't exist`);
        }
      }
      throw e;
    }
  }
}
