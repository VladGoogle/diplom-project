import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { PrismaService } from '../services/prisma.service';
import { CategoryIcon, Prisma, SubcategoryIcon } from '@prisma/client';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SubcategoryIconQueries {
  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async uploadSubcategoryIcon(
    dataBuffer: Buffer,
    filename: string,
  ): Promise<SubcategoryIcon> {
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
      return await this.prisma.subcategoryIcon.create({
        data: {
          url: uploadResult.Location,
          key: uploadResult.Key,
        },
        include: { subcategory: true },
      });
    } catch (e) {
      console.log(e);
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
