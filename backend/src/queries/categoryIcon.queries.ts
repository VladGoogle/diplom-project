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

  async uploadCategoryIcon(
    dataBuffer: Buffer,
    filename: string,
  ): Promise<CategoryIcon> {
    try {
      const s3 = new S3();
      const uploadResult = await s3
        .upload({
          Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
          Body: dataBuffer,
          Key: `${uuid()}-${filename}`,
        })
        .promise()
        .then((data) => {
          return data;
        });
      return await this.prisma.categoryIcon.create({
        data: {
          url: uploadResult.Location,
          key: uploadResult.Key,
        },
        include: { category: true },
      });
    } catch (e) {
      console.log(e);
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
