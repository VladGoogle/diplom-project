import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { OrderDto } from '../dtos/order.dto';
import { Prisma } from '@prisma/client';
import { CartService } from '../services/cart.service';
import { SetSectionAddressDto } from '../dtos/setSectionAddress.dto';

@Injectable()
export class OrderQueries {
  constructor(
    private prisma: PrismaService,
    private cartService: CartService,
  ) {}

  async createOrder(data: OrderDto, cartId: number) {
    try {
      await this.getOrderByCartId(cartId).then((order) => {
        if (order) {
          throw new BadRequestException('Order with such cart already exists');
        }
      });

      const cart = await this.cartService.getCartById(cartId);
      return this.prisma.order.create({
        data: {
          ...data,
          cartId: cartId,
          amount: cart.cartItems.reduce(
            (acc, currentValue) => acc + currentValue.subTotalPrice,
            0,
          ),
          orderItems: {
            create: await Promise.all(
              cart.cartItems.map((item) => ({
                product: { connect: { id: item.productId } },
                quantity: item.quantity,
                subTotalPrice: item.subTotalPrice,
              })),
            ),
          },
        },
        include: {
          selfCheckoutAddress: {
            include: {
              selfCheckout: true,
            },
          },
          user: {
            select: {
              address: true,
            },
          },
          orderItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
            },
          },
          payment: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getOrderById(id: number) {
    try {
      return this.prisma.order.findUniqueOrThrow({
        where: { id: id },
        include: {
          selfCheckoutAddress: {
            include: {
              selfCheckout: true,
            },
          },
          user: {
            select: {
              address: true,
            },
          },
          orderItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
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
        selfCheckoutAddress: {
          include: {
            selfCheckout: true,
          },
        },
        user: {
          select: {
            address: true,
          },
        },
        orderItems: {
          include: {
            product: {
              include: {
                productImages: true,
              },
            },
          },
        },
        payment: true,
      },
    });
  }

  async getAllOrdersByUserId(id: number) {
    try {
      return this.prisma.order.findMany({
        where: { userId: id },
        include: {
          selfCheckoutAddress: {
            include: {
              selfCheckout: true,
            },
          },
          user: {
            select: {
              address: true,
            },
          },
          orderItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
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
      return this.prisma.order.update({
        where: { id: orderId },
        data: {
          orderStatus: [status],
        },
        include: {
          selfCheckoutAddress: {
            include: {
              selfCheckout: true,
            },
          },
          user: {
            include: {
              address: true,
            },
          },
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

  async setSectionAddressToOrder(data: SetSectionAddressDto) {
    try {
      return await this.prisma.order.update({
        where: { id: data.orderId },
        data: {
          selfCheckoutAddressId: data.sectionId,
        },
        include: {
          selfCheckoutAddress: {
            include: {
              selfCheckout: true,
            },
          },
          user: {
            include: {
              address: true,
            },
          },
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
