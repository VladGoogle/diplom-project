import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ProductDto } from '../dtos/product.dto';
import { Prisma } from '@prisma/client';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import { number } from 'joi';

@Injectable()
export class ProductQueries {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: ProductDto) {
    try {
      return await this.prisma.product.create({
        data: {
          ...data,
        },
        include: {
          productImage: true,
          category: true,
          subcategory: true,
          discount: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException(
            `Product with such name already exists`,
          );
        }
      }
      throw e;
    }
  }

  async findProductById(id: number) {
    try {
      return await this.prisma.product.findUniqueOrThrow({
        where: { id: id },
        include: {
          productImage: true,
          category: true,
          subcategory: true,
          discount: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
      throw e;
    }
  }

  async countWishlistScore(id: number) {
    try {
      const product = await this.findProductById(id);
      const wishlistCount = await this.prisma.wishlistItem.count({
        where: { productId: id },
      });
      return {
        message: `Product with id:${product.id} has been added to wishlist ${wishlistCount} times`,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findAllProductsBySearchQuery(
    query: string,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    try {
      return await this.prisma.product.findMany({
        skip: skip,
        take: take,
        where: {
          OR: [
            {
              name: {
                contains: query,
              },
            },
            {
              description: {
                contains: query,
              },
            },
          ],
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
        include: {
          productImage: true,
          category: true,
          subcategory: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async findProductByName(name: string) {
    try {
      const product = await this.prisma.product.findUniqueOrThrow({
        where: { name: name },
        include: {
          productImage: true,
          category: true,
          subcategory: true,
          comments: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findAllProductsByCategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    try {
      return await this.prisma.product.findMany({
        skip: skip,
        take: take,
        where: { categoryId: id },
        include: {
          productImage: true,
          category: {
            include: {
              categoryIcon: true,
            },
          },
          subcategory: {
            include: {
              subcategoryIcon: true,
            },
          },
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
    }
  }

  async findAllProductsBySubcategoryId(
    id: number,
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    try {
      return await this.prisma.product.findMany({
        skip: skip,
        take: take,
        where: { subcategoryId: id },
        include: {
          productImage: true,
          category: {
            include: {
              categoryIcon: true,
            },
          },
          subcategory: {
            include: {
              subcategoryIcon: true,
            },
          },
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        }
      }
    }
  }

  async getSortedProducts(
    sortBy: 'name' | 'price',
    sortOrder: Prisma.SortOrder,
    skip: number,
    take: number,
  ) {
    try {
      return await this.prisma.product.findMany({
        skip: skip,
        take: take,
        orderBy: {
          [sortBy]: sortOrder,
        },
        include: {
          productImage: true,
          category: {
            include: {
              categoryIcon: true,
            },
          },
          subcategory: {
            include: {
              subcategoryIcon: true,
            },
          },
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async removeProductById(id: number) {
    try {
      const product = await this.prisma.product.delete({
        where: { id: id },
      });
      return { message: `Product with id: ${product.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
    }
  }

  async removeProductByName(name: string) {
    try {
      const product = await this.prisma.product.delete({
        where: { name: name },
      });
      return { message: `Product '${product.name}' has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        }
      }
    }
  }

  async updateProductInfo(data: UpdateProductDto, id: number) {
    try {
      return await this.prisma.product.update({
        where: { id: id },
        data: {
          ...data,
        },
        include: {
          productImage: true,
          category: {
            include: {
              categoryIcon: true,
            },
          },
          subcategory: {
            include: {
              subcategoryIcon: true,
            },
          },
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Product doesn't exist`);
        } else if (e.code === 'P2002') {
          throw new BadRequestException(
            `Product with such name already exists`,
          );
        }
      }
      throw e;
    }
  }
}
