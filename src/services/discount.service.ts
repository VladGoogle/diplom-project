import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Discount, Product } from '@prisma/client';
import { DiscountQueries } from '../queries/discount.queries';
import { DiscountDto } from '../dtos/discount.dto';

@Injectable()
export class DiscountService {
  constructor(
    private prisma: PrismaService,
    private discountQueries: DiscountQueries,
  ) {}

  async addDiscountToTheProduct(
    data: DiscountDto,
    id: number,
  ): Promise<Product> {
    return await this.discountQueries.addDiscountToTheProduct(id, data);
  }

  async getDiscountById(id: number): Promise<Discount> {
    return await this.discountQueries.getDiscountById(id);
  }

  async deleteDiscountFromProduct(
    productId: number,
  ): Promise<Product | { message: string }> {
    return await this.discountQueries.deleteDiscountFromProduct(productId);
  }
}
