import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CartItemDto } from '../dtos/cartItem.dto';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartQueries {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

  async addProductToCart(data: CartItemDto) {
    const cart = await this.prisma.cart.findFirst({
      where: {
        userId: data.userId,
        AND: {
          NOT: {
            cartItems: {
              none: {},
            },
          },
        },
      },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      const product = await this.productService.findProductById(data.productId);
      const cartObj = await this.prisma.cart.create({
        data: {
          userId: data.userId,
          cartItems: {
            create: {
              productId: data.productId,
              quantity: data.quantity,
              subTotalPrice: product.price * data.quantity,
            },
          },
        },
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
        },
      });
      const cartItem = await this.prisma.cartItem.findFirst({
        where: { cartId: cartObj.id },
      });
      const updatedCartObj = await this.prisma.cart.update({
        where: { id: cartObj.id },
        data: {
          totalPrice: {
            increment: cartItem.subTotalPrice,
          },
        },
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
        },
      });
      return updatedCartObj;
    } else {
      const product = await this.productService.findProductById(data.productId);
      const cartItem = await this.prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: data.productId,
          quantity: data.quantity,
          subTotalPrice: product.price * data.quantity,
        },
      });

      const updatedCart = await this.prisma.cart.update({
        where: { id: cart.id },
        data: {
          totalPrice: {
            increment: cartItem.subTotalPrice,
          },
        },
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
        },
      });
      return updatedCart;
    }
  }

  async getCartById(id: number) {
    try {
      return await this.prisma.cart.findUniqueOrThrow({
        where: { id: id },
        include: {
          cartItems: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Cart doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteCartById(id: number) {
    try {
      const cart = await this.prisma.cart.delete({
        where: {
          userId: id,
        },
      });
      return { message: `Cart with userId: ${cart.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Cart doesn't exist`);
        }
      }
      throw e;
    }
  }

  async removeCartItemFromCart(cartId: number, cartItemId: number) {
    try {
      const cartItem = await this.prisma.cartItem.findFirstOrThrow({
        where: { id: cartItemId },
      });
      const cart = await this.prisma.cart.findFirstOrThrow({
        where: { id: cartId },
      });
      await this.prisma.cartItem.delete({
        where: { id: cartItemId },
      });
      return await this.prisma.cart.update({
        where: { id: cartId },
        data: {
          totalPrice: (cart.totalPrice -= cartItem.subTotalPrice),
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Item doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteAllItemsFromCart(id: number) {
    try {
      const deletedItems = this.prisma.cartItem.deleteMany({
        where: { cartId: id },
      });
      return { message: `All items from cart with id:${id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Cart doesn't exist`);
        }
      }
      throw e;
    }
  }
}
