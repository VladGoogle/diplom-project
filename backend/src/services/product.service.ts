import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductQueries } from '../queries/product.queries';
import { ProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import { UploadProductImageService } from '../classes/uploadImage.class';
import { ProductImageQueries } from '../queries/productImage.queries';
import {PrismaService} from "./prisma.service";

@Injectable()
export class ProductService extends UploadProductImageService {
  constructor(
      private prisma: PrismaService,
    private productQueries: ProductQueries,
    productImageQueries: ProductImageQueries,
  ) {
    super(productImageQueries);
  }

  async createProduct(
    data: ProductDto,
    dataBuffer: Buffer,
    filename: string,
  ): Promise<Product> {
    const image = await super.uploadProductImage(dataBuffer, filename);
    return await this.productQueries.createProduct({
      ...data,
      productImageId: image.id,
    });
  }

  async findProductById(id: number) {
    return await this.productQueries.findProductById(id);
  }

  async findProductByName(name: string) {
    return await this.productQueries.findProductByName(name);
  }

  async findAllProductsByCategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    return await this.productQueries.findAllProductsByCategoryId(
      id,
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  async findAllProductsBySubcategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    return await this.productQueries.findAllProductsBySubcategoryId(
      id,
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  async findAllProductsBySearchQuery(
    query: string,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    return await this.productQueries.findAllProductsBySearchQuery(
      query,
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  async getSortedProducts(
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    return await this.productQueries.getSortedProducts(
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  async removeProductById(id: number) {
    return await this.productQueries.removeProductById(id);
  }

  async removeProductByName(name: string) {
    return await this.productQueries.removeProductByName(name);
  }

  async updateProductInfo(data: UpdateProductDto, id: number) {
    return await this.productQueries.updateProductInfo(data, id);
  }
}
