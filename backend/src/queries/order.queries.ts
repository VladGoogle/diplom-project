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
export class OrderQueries {
  constructor(
    private prisma: PrismaService,
    private cartService: CartService,
  ) {}

  async createOrder(data: OrderDto, cartId: number) {
    try {
      const order = await this.getOrderByCartId(cartId).then((order) => {
        if (order) {
          throw new BadRequestException('Order with such cart already exists');
        }
      });

      const cart = await this.cartService.getCartById(cartId);
      return await this.prisma.order.create({
        data: {
          ...data,
          cartId: cartId,
          amount: cart.cartItems.reduce(
            (acc, currentValue) => acc + currentValue.subTotalPrice,
            0,
          ),
          orderItems: {
            create: cart.cartItems.map((item) => ({
              product: { connect: { id: item.productId } },
              quantity: item.quantity,
              subTotalPrice: item.subTotalPrice,
            })),
          },
        },
        include: {
          orderItems: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getOrderById(id: number) {
    try {
      return await this.prisma.order.findUniqueOrThrow({
        where: { id: id },
        include: {
          user: true,
          orderItems: {
            include: {
              product: true,
            },
          },
          payment: true,
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

  async getOrderByCartId(id: number) {
    return this.prisma.order.findUnique({
      where: { cartId: id },
      include: {
        user: true,
        orderItems: {
          include: {
            product: true,
          },
        },
        payment: true,
      },
    });
  }

  async getAllOrdersByUserId(id: number) {
    try {
      return await this.prisma.order.findMany({
        where: { userId: id },
        include: {
          user: true,
          orderItems: {
            include: {
              product: true,
            },
          },
          payment: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async deleteAllOrdersByUserId(id: number) {
    try {
      await this.prisma.order.deleteMany({
        where: {
          userId: id,
        },
      });
      return { message: `All orders of user with id: ${id} have been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async updateOrderStatus(orderId: number, status: 'RECEIVED' | 'RETURNED') {
    try {
      return await this.prisma.order.update({
        where: { id: orderId },
        data: {
          orderStatus: [status],
        },
        include: {
          orderItems: true,
          payment: true,
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
