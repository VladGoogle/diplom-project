import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CartItemDto } from '../dtos/cartItem.dto';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';
import { UpdateCartItemQuantityDto } from '../dtos/updateCartItemQuantity.dto';

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

  async getCartItemById(id: number) {
    try {
      return await this.prisma.cartItem.findUniqueOrThrow({
        where: { id: id },
        include: {
          product: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Cart item doesn't exist`);
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
      const cartItem = await this.prisma.cartItem.delete({
        where: { id: cartItemId },
      });
      return await this.prisma.cart.update({
        where: { id: cartId },
        data: {
          totalPrice: {
            decrement: cartItem.subTotalPrice,
          },
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

  async updateCartTotalPrice(id: number) {
    try {
      const currentTotalPrice = await this.getCartById(id)
        .then((data) => {
          return data.cartItems;
        })
        .then((arr) => {
          return arr.map((item) => {
            return item.subTotalPrice;
          });
        })
        .then((arr) => {
          return arr.reduce((previous, current) => {
            return previous + current;
          });
        });

      return await this.prisma.cart.update({
        where: { id: id },
        data: {
          totalPrice: currentTotalPrice,
        },
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

  async updateCartItemQuantity(data: UpdateCartItemQuantityDto) {
    try {
      const productPrice = await this.getCartItemById(data.cartItemId).then(
        (data) => {
          return data.product.price;
        },
      );
      await this.prisma.cartItem.update({
        where: { id: data.cartItemId },
        data: {
          quantity: data.quantity,
          subTotalPrice: productPrice * data.quantity,
        },
      });
      return await this.updateCartTotalPrice(data.cartId);
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
