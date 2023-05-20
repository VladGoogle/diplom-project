import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CartItemDto } from '../dtos/cartItem.dto';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';
import { UpdateCartItemQuantityDto } from '../dtos/updateCartItemQuantity.dto';
import { RemoveItemFromCartDto } from '../dtos/removeItemFromCart.dto';

@Injectable()
export class CartQueries {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

  async addProductToCart(data: CartItemDto) {
    let newCart;
    let item;
    try {
      const cart = await this.prisma.cart.findFirst({
        where: { userId: data.userId },
        include: {
          cartItems: true,
        },
      });
      const product = await this.productService.findProductById(data.productId);

      if (!cart) {
        if (product.discountPrice !== null) {
          newCart = await this.prisma.cart.create({
            data: {
              userId: data.userId,
              cartItems: {
                create: {
                  productId: data.productId,
                  quantity: 1,
                  subTotalPrice: product.discountPrice,
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
        } else {
          newCart = await this.prisma.cart.create({
            data: {
              userId: data.userId,
              cartItems: {
                create: {
                  productId: data.productId,
                  quantity: 1,
                  subTotalPrice: product.price,
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
        }
        return await this.prisma.cart.update({
          where: { id: newCart.id },
          data: {
            totalPrice: {
              increment: (
                await this.prisma.cartItem.findFirst({
                  where: { cartId: newCart.id },
                })
              ).subTotalPrice,
            },
          },
          include: {
            cartItems: {
              include: {
                product: {
                  select: {
                    subcategory: true,
                    name: true,
                    price: true,
                    discountPrice: true,
                    productImage: true,
                  },
                },
              },
            },
          },
        });
      } else {
        let item = cart.cartItems.find(
          (obj) => obj.productId === data.productId,
        );
        if (product.discountPrice !== null) {
          if (item) {
            return await this.prisma.cart.update({
              where: { id: cart.id },
              data: {
                cartItems: {
                  update: {
                    where: {
                      id: item.id,
                    },
                    data: {
                      quantity: {
                        increment: 1,
                      },
                    },
                  },
                },
                totalPrice: {
                  increment: product.discountPrice,
                },
              },
              include: {
                cartItems: {
                  include: {
                    product: {
                      select: {
                        subcategory: true,
                        name: true,
                        price: true,
                        discountPrice: true,
                        productImage: true,
                      },
                    },
                  },
                },
              },
            });
          }
          item = await this.prisma.cartItem.create({
            data: {
              cartId: cart.id,
              productId: data.productId,
              quantity: 1,
              subTotalPrice: product.discountPrice,
            },
          });
        } else {
          if (item) {
            return await this.prisma.cart.update({
              where: { id: cart.id },
              data: {
                cartItems: {
                  update: {
                    where: {
                      id: item.id,
                    },
                    data: {
                      quantity: {
                        increment: 1,
                      },
                    },
                  },
                },
                totalPrice: {
                  increment: product.price,
                },
              },
              include: {
                cartItems: {
                  include: {
                    product: {
                      select: {
                        subcategory: true,
                        name: true,
                        price: true,
                        discountPrice: true,
                        productImage: true,
                      },
                    },
                  },
                },
              },
            });
          }
          item = await this.prisma.cartItem.create({
            data: {
              cartId: cart.id,
              productId: data.productId,
              quantity: 1,
              subTotalPrice: product.price,
            },
          });
        }
        return await this.prisma.cart.update({
          where: { id: cart.id },
          data: {
            totalPrice: {
              increment: item.subTotalPrice,
            },
          },
          include: {
            cartItems: {
              include: {
                product: {
                  select: {
                    subcategory: true,
                    name: true,
                    price: true,
                    discountPrice: true,
                    productImage: true,
                  },
                },
              },
            },
          },
        });
      }
    } catch (e) {
      throw e;
    }
  }

  async getCartById(id: number) {
    try {
      return await this.prisma.cart.findUniqueOrThrow({
        where: { id: id },
        include: {
          cartItems: {
            include: {
              product: {
                select: {
                  subcategory: true,
                  name: true,
                  price: true,
                  productImage: true,
                },
              },
            },
          },
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

  async getCartByUserId(id: number) {
    try {
      return await this.prisma.cart.findUniqueOrThrow({
        where: { userId: id },
        include: {
          cartItems: {
            include: {
              product: {
                select: {
                  subcategory: true,
                  name: true,
                  price: true,
                  productImage: true,
                },
              },
            },
          },
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
          product: {
            select: {
              subcategory: true,
              name: true,
              price: true,
              productImage: true,
            },
          },
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

  async removeCartItemFromCart(data: RemoveItemFromCartDto) {
    try {
      return await this.prisma.cart.update({
        where: { id: data.cartId },
        data: {
          totalPrice: {
            decrement: (
              await this.prisma.cartItem.delete({
                where: { id: data.cartItemId },
              })
            ).subTotalPrice,
          },
        },
        include: {
          cartItems: {
            include: {
              product: {
                select: {
                  subcategory: true,
                  name: true,
                  price: true,
                  productImage: true,
                },
              },
            },
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
          cartItems: {
            include: {
              product: {
                select: {
                  subcategory: true,
                  name: true,
                  price: true,
                  productImage: true,
                },
              },
            },
          },
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
      await this.prisma.cartItem.deleteMany({
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
