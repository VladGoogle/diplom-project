import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { SearchInterface } from '../interfaces/search.interface';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Role } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductImageQueries } from '../queries/productImage.queries';

@Controller()
export class ProductController extends ProductService {
  constructor(
    prisma: PrismaService,
    productQueries: ProductQueries,
    productImageQueries: ProductImageQueries,
  ) {
    super(prisma, productQueries, productImageQueries);
  }

  @Get('search')
  async getAllProductsBySearchQuery(
    @Query() search: SearchInterface,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('skip') skip = 0,
    @Query('take') take = 10,
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
  ) {
    return await super.findAllProductsBySearchQuery(
      search.searchQuery,
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  @Get('product/findByName')
  async getProductByName(@Body() name: string) {
    return await super.findProductByName(name);
  }
  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Delete('product/deleteByName')
  async deleteProductByName(@Body() name: string) {
    return await super.removeProductByName(name);
  }

  @Get('category/:id/products')
  async getAllProductsByCategoryId(
    @Param('id', ParseIntPipe) id: number,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip: any = 0,
    @Query('take') take: any = 10,
  ) {
    return await super.findAllProductsByCategoryId(
      id,
      sortBy,
      sortOrder,
      parseInt(skip),
      parseInt(take),
    );
  }

  @Get('subcategory/:id/products')
  async getAllProductsBySubcategoryId(
    @Param('id', ParseIntPipe) id: number,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip: any = 0,
    @Query('take') take: any = 10,
  ) {
    return await super.findAllProductsBySubcategoryId(
      id,
      sortBy,
      sortOrder,
      parseInt(skip),
      parseInt(take),
    );
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Post('products')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files', maxCount: 10 }]))
  async addProduct(
    @UploadedFiles() files,
    @Req() req,
    @Body() data: ProductDto,
  ) {
    return await super.createProduct(
      {
        ...data,
        categoryId: parseInt(data.categoryId.toString()),
        subcategoryId: parseInt(data.subcategoryId.toString()),
        price: parseFloat(data.price.toString()),
        qtyInStock: parseInt(data.qtyInStock.toString()),
      },
      files,
    );
  }

  @Get('products')
  async getAllProducts(
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip: any = 0,
    @Query('take') take: any = 10,
  ) {
    return await super.getSortedProducts(
      sortBy,
      sortOrder,
      parseInt(skip),
      parseInt(take),
    );
  }

  @Get('product/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await super.findProductById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @Patch('product/:id')
  async updateProductInfo(
    @Body() data: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await super.updateProductInfo(data, id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @Delete('product/:id')
  async deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return await super.removeProductById(id);
  }
}
