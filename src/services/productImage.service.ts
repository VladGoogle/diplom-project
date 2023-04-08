import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductImage } from '@prisma/client';
import { ProductImageQueries } from '../queries/productImage.queries';

@Injectable()
export class ProductImageService {
  constructor(
    private prisma: PrismaService,
    private productImageQueries: ProductImageQueries,
  ) {}

  async uploadProductImage(
    data: Buffer,
    filename: string,
  ): Promise<ProductImage> {
    return await this.productImageQueries.uploadProductImage(data, filename);
  }

  async getProductImageById(id: number): Promise<ProductImage> {
    return await this.productImageQueries.getProductImageById(id);
  }
}
