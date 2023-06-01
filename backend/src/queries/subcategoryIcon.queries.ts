import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {  Prisma,} from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SubcategoryIconQueries {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  async createImageRecord(location: string, key: string, id: number) {
    try {
      return await this.prisma.subcategoryIcon.create({
        data: {
          url: location,
          key: key,
          subcategory: {
            connect: {
              id: id,
            },
          },
        },
        include: { subcategory: true },
      });
    } catch (e) {
      throw e;
    }
  }

  async getSubcategoryIconById(id: number) {
    try {
      return await this.prisma.subcategoryIcon.findUniqueOrThrow({
        where: { id: id },
        include: { subcategory: true },
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
