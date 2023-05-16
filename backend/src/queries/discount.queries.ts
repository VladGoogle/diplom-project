import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ProductService } from '../services/product.service';
import { Prisma } from '@prisma/client';
import { DiscountDto } from '../dtos/discount.dto';

@Injectable()
export class DiscountQueries {
  constructor(
    private prisma: PrismaService,
    private productService: ProductService,
  ) {}

  async addDiscountToTheProduct(id: number, data: DiscountDto) {
    try {
      const discount = await this.prisma.discount.create({
        data: {
          ...data,
        },
      });

      const product = await this.productService.findProductById(id);
      return await this.prisma.product.update({
        where: { id: id },
        data: {
          discountId: discount.id,
          discountPrice:
            product.price - product.price * (discount.discount_percent / 100),
        },
        include: {
          discount: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getDiscountById(id: number) {
    try {
      return await this.prisma.discount.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Discount doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteDiscountFromProduct(productId: number) {
    try {
      const product = await this.productService.findProductById(productId);
      if (product.discountId === null) {
        return {
          message: `Product with id:${product.id} don't have a discount`,
        };
      } else {
        const discount = product.discount.discount_percent;
        return await this.prisma.product.update({
          where: { id: productId },
          data: {
            discountId: null,
            discountPrice: product.price / (1 - discount / 100),
          },
        });
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Wishlist doesn't exist`);
        }
      }
      throw e;
    }
  }
}
