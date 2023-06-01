import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductImage } from '@prisma/client';
import { ProductImageQueries } from '../queries/productImage.queries';

@Injectable()
export class ProductImageService extends ProductImageQueries {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  async getProductImageById(id: number) {
    return await super.getProductImageById(id);
  }
}
