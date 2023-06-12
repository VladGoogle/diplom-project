import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { DiscountDto } from '../dtos/discount.dto';
import { ProductQueries } from './product.queries';

@Injectable()
export class DiscountQueries {
  constructor(
    private prisma: PrismaService,
    private productQueries: ProductQueries,
  ) {}

  async addDiscountToTheProduct(id: number, data: DiscountDto) {
    try {
      const discount = await this.prisma.discount.create({
        data: {
          ...data,
        },
      });

      const product = await this.productQueries.findProductById(id);
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
      const product = await this.productQueries.findProductById(productId);
      if (product.discountId === null) {
        return {
          message: `Product with id:${product.id} doesn't have a discount`,
        };
      } else {
        await this.prisma.discount
          .delete({
            where: {
              id: product.discountId,
            },
          })
          .then(async () => {
            await this.prisma.product.update({
              where: {
                id: productId,
              },
              data: {
                discountPrice: null,
              },
            });
          });
        return await this.productQueries.findProductById(productId);
      }
    } catch (e) {
      throw e;
    }
  }
}
