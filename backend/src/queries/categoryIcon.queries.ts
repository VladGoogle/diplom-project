import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CategoryIcon, Prisma } from '@prisma/client';

@Injectable()
export class CategoryIconQueries {
  constructor(private prisma: PrismaService) {}

  async createImageRecord(location: string, key: string, id: number) {
    try {
      return await this.prisma.categoryImage.create({
        data: {
          url: location,
          key: key,
          category: {
            connect: {
              id: id,
            },
          },
        },
        include: { category: true },
      });
    } catch (e) {
      throw e;
    }
  }

  async createIconRecord(location: string, key: string, id: number) {
    try {
      return await this.prisma.categoryIcon.create({
        data: {
          url: location,
          key: key,
          category: {
            connect: {
              id: id,
            },
          },
        },
        include: { category: true },
      });
    } catch (e) {
      throw e;
    }
  }

  async getCategoryIconById(id: number) {
    try {
      return await this.prisma.categoryIcon.findUniqueOrThrow({
        where: { id: id },
        include: { category: true },
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
