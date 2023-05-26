import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { PrismaService } from '../services/prisma.service';
import { CategoryIcon, Prisma } from '@prisma/client';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CategoryIconQueries {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async createImageRecord(location: string, key: string, id: number) {
    try {
      return await this.prisma.categoryIcon.create({
        data: {
          categoryId: id,
          url: location,
          key: key,
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
