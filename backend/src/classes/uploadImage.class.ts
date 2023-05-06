import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../services/prisma.service';
import { ProductImageQueries } from '../queries/productImage.queries';

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
}

export class UploadProductImageService extends UploadImageService {
  constructor(private readonly productImageQueries: ProductImageQueries) {
    super();
  }

  async uploadProductImage(dataBuffer: Buffer, filename: string) {
    try {
      const uploadData = await super.uploadImage(dataBuffer, filename);
      return await this.productImageQueries.createImageRecord(
        uploadData.Location,
        uploadData.Key,
      );
    } catch (e) {
      throw e;
    }
  }
}
