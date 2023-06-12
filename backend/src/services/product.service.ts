import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductQueries } from '../queries/product.queries';
import { ProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import { UploadProductImageService } from '../classes/uploadImage.class';
import { ProductImageQueries } from '../queries/productImage.queries';
import { PrismaService } from './prisma.service';
import { ImageInterface } from '../interfaces/image.interface';
import { WishlistQueries } from '../queries/wishlist.queries';
import { TokenService } from './token.service';

@Injectable()
export class ProductService extends UploadProductImageService {
  constructor(
    private prisma: PrismaService,
    private productQueries: ProductQueries,
    productImageQueries: ProductImageQueries,
    private wishlistQueries: WishlistQueries,
    private tokenService: TokenService,
  ) {
    super(productImageQueries);
  }

  async createProduct(
    data: ProductDto,
    images: ImageInterface[],
    authHeader: string
  ): Promise<any>{
    const product = await this.productQueries.createProduct({
      ...data,
    });
    await super.uploadProductImages(images, product.id);
    return await this.findProductById(product.id, authHeader);
  }

  async findProductById(id: number, authHeader: string) {
    if(authHeader) {
      const decodedPayload = this.tokenService.decodeAuthToken(authHeader);
      const product = await this.productQueries.findProductById(id);
      const wishlist = await this.wishlistQueries.getWishlistByUserIdWithoutError(decodedPayload.id)
      return {product, wishlist}
    } else {
      return await this.productQueries.findProductById(id);
    }
  }

  async findProductByName(name: string, authHeader: string) {
    if(authHeader) {
      const decodedPayload = this.tokenService.decodeAuthToken(authHeader);
      const product = await this.productQueries.findProductByName(name);
      const wishlist = await this.wishlistQueries.getWishlistByUserIdWithoutError(decodedPayload.id)
      return {product, wishlist}
    } else {
      return await this.productQueries.findProductByName(name);
    }
  }

  async findAllProductsByCategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
    minPrice: number,
    maxPrice: number,
  ) {
    return await this.productQueries.findAllProductsByCategoryId(
      id,
      sortBy,
      sortOrder,
      skip,
      take,
      minPrice,
      maxPrice,
    );
  }

  async findAllProductsBySubcategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
    minPrice: number,
    maxPrice: number,
  ) {
    return await this.productQueries.findAllProductsBySubcategoryId(
      id,
      sortBy,
      sortOrder,
      skip,
      take,
      minPrice,
      maxPrice,
    );
  }

  async findAllProductsBySearchQuery(
    query: string,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
    minPrice: number,
    maxPrice: number,
  ) {
    return await this.productQueries.findAllProductsBySearchQuery(
      query,
      sortBy,
      sortOrder,
      skip,
      take,
      minPrice,
      maxPrice,
    );
  }

  async getSortedProducts(
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
    minPrice: number,
    maxPrice: number,
  ) {
    return await this.productQueries.getSortedProducts(
      sortBy,
      sortOrder,
      skip,
      take,
      minPrice,
      maxPrice,
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
