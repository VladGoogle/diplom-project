import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';
import { WishlistItemDto } from '../dtos/wishlistItem.dto';

@Injectable()
export class WishlistQueries {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

  async addProductToWishlist(data: WishlistItemDto) {
    const wishlist = await this.prisma.wishlist.findFirst({
      where: {
        userId: data.userId,
      },
      include: {
        wishlistItems: {
          include: {
            product: {
              include: {
                productImages: true,
              },
            },
          },
        },
      },
    });

    if (!wishlist) {
      const wishlistObj = await this.prisma.wishlist.create({
        data: {
          userId: data.userId,
          wishlistItems: {
            create: {
              productId: data.productId,
            },
          },
        },
        include: {
          wishlistItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
            },
          },
        },
      });

      await this.prisma.product.update({
        where: { id: data.productId },
        data: {
          wishlistCount: {
            increment: 1,
          },
        },
      });
      return wishlistObj;
    } else {
      if (
        wishlist.wishlistItems.find((obj) => obj.productId === data.productId)
      ) {
        throw new BadRequestException(
          'This product has already been added in the wishlist',
        );
      }

      await this.prisma.wishlistItem.create({
        data: {
          wishlistId: wishlist.id,
          productId: data.productId,
        },
        include: {
          wishlist: true,
        },
      });

      await this.prisma.product.update({
        where: { id: data.productId },
        data: {
          wishlistCount: {
            increment: 1,
          },
        },
      });

      return await this.getWishlistById(wishlist.id);
    }
  }

  async getWishlistById(id: number) {
    try {
      return await this.prisma.wishlist.findUniqueOrThrow({
        where: { id: id },
        include: {
          wishlistItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
            },
          },
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Wishlist doesn't exist`);
        }
      }
      throw e;
    }
  }

  async getWishlistByUserId(id: number) {
    try {
      return await this.prisma.wishlist.findUniqueOrThrow({
        where: { userId: id },
        include: {
          wishlistItems: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
            },
          },
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Wishlist doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteWishlistByUserId(id: number) {
    try {
      const wishlist = await this.prisma.wishlist.delete({
        where: {
          userId: id,
        },
        include: {
          wishlistItems: true,
        },
      });
      return { message: `Wishlist with id: ${wishlist.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Wishlist doesn't exist`);
        }
      }
      throw e;
    }
  }

  async removeWishlistItemFromWishlist(
    wishlistId: number,
    wishlistItemId: number,
  ) {
    try {
      await this.prisma.wishlistItem
        .delete({
          where: { id: wishlistItemId },
        })
        .then(async (item) => {
          await this.prisma.product.update({
            where: { id: item.productId },
            data: {
              wishlistCount: {
                decrement: 1,
              },
            },
          });
        });
    } catch (e) {
      throw e;
    }

    return await this.getWishlistById(wishlistId);
  }
}
