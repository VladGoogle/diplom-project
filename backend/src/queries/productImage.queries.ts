import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { PrismaService } from '../services/prisma.service';
import { CategoryIcon, Prisma, ProductImage } from '@prisma/client';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductImageQueries {
  constructor(
    private prisma: PrismaService,
  ) {}

  // async uploadProductImage(
  //   dataBuffer: Buffer,
  //   filename: string,
  // ): Promise<ProductImage> {
  //   try {
  //     const s3 = new S3();
  //     const uploadResult = await s3
  //       .upload({
  //         Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
  //         Body: dataBuffer,
  //         Key: `${uuid()}-${filename}`,
  //       })
  //       .promise()
  //       .then((data) => {
  //         return data;
  //       });
  //   } catch (e) {
  //     throw e;
  //   }
  // }

  async createImageRecord(location: string, key: string) {
    try {
      return await this.prisma.productImage.create({
        data: {
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
