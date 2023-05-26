import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../services/prisma.service';
import { ProductImageQueries } from '../queries/productImage.queries';
import { Files, ImageInterface } from '../interfaces/image.interface';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';

export class UploadImageService extends ConfigService {
  constructor() {
    super();
  }

  async uploadImage(dataBuffer: Buffer, filename: string) {
    const s3 = new S3();
    return await s3
      .upload({
        Bucket: super.get('AWS_PUBLIC_BUCKET_NAME'),
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise()
      .then((data) => {
        return data;
      });
  }

  async uploadMultipleImages<T extends Files>(images: T) {
    const s3 = new S3();
    return Promise.all(
      images.files.map(async (image) => {
        return await s3
          .upload({
            Bucket: super.get('AWS_PUBLIC_BUCKET_NAME'),
            Body: image.buffer,
            Key: `${uuid()}-${image.originalname}`,
          })
          .promise()
          .then((data) => {
            return data;
          });
      }),
    );
  }
}

export class UploadProductImageService extends UploadImageService {
  constructor(private readonly productImageQueries: ProductImageQueries) {
    super();
  }

  async uploadProductImages<T extends Files>(images: T, productId: number) {
    try {
      const imageArray = await super.uploadMultipleImages(images);
      return Promise.all(
        imageArray.map(async (obj) => {
          return await this.productImageQueries.createImageRecord(
            obj.Location,
            obj.Key,
            productId,
          );
        }),
      );
    } catch (e) {
      throw e;
    }
  }
}

export class UploadCategoryImageService extends UploadImageService {
  constructor(private readonly categoryIconQueries: CategoryIconQueries) {
    super();
  }

  async uploadCategoryIcons<T extends Files>(images: T, categoryId: number) {
    try {
      const imageArray = await super.uploadMultipleImages(images);
      return Promise.all(
        imageArray.map(async (obj) => {
          return await this.categoryIconQueries.createImageRecord(
            obj.Location,
            obj.Key,
            categoryId,
          );
        }),
      );
    } catch (e) {
      throw e;
    }
  }
}
