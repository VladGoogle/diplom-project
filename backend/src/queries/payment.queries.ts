import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { PaymentDto } from '../dtos/payment.dto';

@Injectable()
export class PaymentQueries {
  constructor(private prisma: PrismaService) {}

  async createPayment(data: PaymentDto) {
    try {
      return await this.prisma.payment.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async createRefundForPayment(refundToken: string, id: number) {
    try {
      return await this.prisma.payment.update({
        where: { orderId: id },
        data: {
          chargeStatus: ['REFUNDED'],
          refundToken: refundToken,
        },
        include: {
          order: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Order doesn't exist`);
        }
      }
      throw e;
    }
  }
}
