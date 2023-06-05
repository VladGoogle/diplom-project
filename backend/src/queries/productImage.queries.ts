import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductImageQueries {
  constructor(private prisma: PrismaService) {}

  async createImageRecord(location: string, key: string, id: number) {
    try {
      return await this.prisma.productImage.create({
        data: {
          productId: id,
          url: location,
          key: key,
        },
        include: { product: true },
      });
    } catch (e) {
      throw e;
    }
  }

  async getProductImageById(id: number) {
    try {
      return await this.prisma.productImage.findUniqueOrThrow({
        where: { id: id },
        include: { product: true },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Image doesn't exist`);
        }
      }
      throw e;
    }
  }
}
