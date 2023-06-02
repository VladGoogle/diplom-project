import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { ProductImageQueries } from '../queries/productImage.queries';
import { Files, ImageInterface } from '../interfaces/image.interface';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';
import { UploadImageDto } from '../dtos/uploadImage.dto';
import { SubcategoryIconQueries } from '../queries/subcategoryIcon.queries';

export class UploadImageService extends ConfigService {
  constructor() {
    super();
  }

  async uploadImage(data: UploadImageDto) {
    const s3 = new S3();
    return await s3
      .upload({
        Bucket: super.get('AWS_PUBLIC_BUCKET_NAME'),
        Body: data.dataBuffer,
        Key: `${uuid()}-${data.filename}`,
      })
      .promise()
      .then((data) => {
        return data;
      });
  }

  async uploadMultipleImages<T extends Files>(images: T) {
    const s3 = new S3();
    return await Promise.all(
      images.files.map(async (image) => {
        return s3
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
      return await Promise.all(
        imageArray.map((obj) => {
          return this.productImageQueries.createImageRecord(
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

  async uploadCategoryIcon(data: UploadImageDto, categoryId: number) {
    try {
      const icon = await super.uploadImage(data);
      return this.categoryIconQueries.createIconRecord(
        icon.Location,
        icon.Key,
        categoryId,
      );
    } catch (e) {
      throw e;
    }
  }

  async uploadCategoryImage(data: UploadImageDto, categoryId: number) {
    try {
      const icon = await super.uploadImage(data);
      return this.categoryIconQueries.createImageRecord(
        icon.Location,
        icon.Key,
        categoryId,
      );
    } catch (e) {
      throw e;
    }
  }
}

export class UploadSubcategoryIconService extends UploadImageService {
  constructor(private readonly subcategoryIconQueries: SubcategoryIconQueries) {
    super();
  }

  async uploadSubcategoryIcon(data: UploadImageDto, subcategoryId: number) {
    try {
      const icon = await super.uploadImage(data);
      return await this.subcategoryIconQueries.createImageRecord(
        icon.Location,
        icon.Key,
        subcategoryId,
      );
    } catch (e) {
      throw e;
    }
  }
}
