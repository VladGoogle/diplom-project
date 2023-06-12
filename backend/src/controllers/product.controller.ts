import {
  Body,
  Controller,
  Delete,
  Get, Headers,
  HttpStatus,
  Param,
  ParseFilePipe,
  ParseFilePipeBuilder,
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
  FilesInterceptor,
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
import {
  FileTypeValidator,
  MaxFileSizeValidator,
} from '../validators/fileValidator.validator';
import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';
import { WishlistQueries } from '../queries/wishlist.queries';
import { TokenService } from '../services/token.service';

@Controller()
export class ProductController extends ProductService {
  constructor(
    prisma: PrismaService,
    productQueries: ProductQueries,
    productImageQueries: ProductImageQueries,
    wishlistQueries: WishlistQueries,
    tokenService: TokenService
  ) {
    super(prisma, productQueries, productImageQueries, wishlistQueries, tokenService);
  }

  @Get('search')
  async getAllProductsBySearchQuery(
    @Query() search: SearchInterface,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip = '0',
    @Query('take') take = '10',
    @Query('minPrice') minPrice = '0',
    @Query('maxPrice') maxPrice = '9999',
  ) {
    return await super.findAllProductsBySearchQuery(
      search.searchQuery,
      sortBy,
      sortOrder,
      +skip,
      +take,
      +minPrice,
      +maxPrice,
    );
  }

  @Get('product/findByName')
  async getProductByName(@Body() name: string, @Headers() headers: any) {
    return await super.findProductByName(name, getTokenFromHeaders(headers));
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
    @Query('skip') skip = '0',
    @Query('take') take = '10',
    @Query('minPrice') minPrice = '0',
    @Query('maxPrice') maxPrice = '9999',
  ) {
    return await super.findAllProductsByCategoryId(
      id,
      sortBy,
      sortOrder,
      +skip,
      +take,
      +minPrice,
      +maxPrice,
    );
  }

  @Get('subcategory/:id/products')
  async getAllProductsBySubcategoryId(
    @Param('id', ParseIntPipe) id: number,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip = '0',
    @Query('take') take = '10',
    @Query('minPrice') minPrice = '0',
    @Query('maxPrice') maxPrice = '9999',
  ) {
    return await super.findAllProductsBySubcategoryId(
      id,
      sortBy,
      sortOrder,
      +skip,
      +take,
      +minPrice,
      +maxPrice,
    );
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Post('products')
  @UseInterceptors(FilesInterceptor('files'))
  async addProduct(
    @UploadedFiles() files: any,
    @Req() req,
    @Body() data: ProductDto,
    @Headers() headers: any
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
      getTokenFromHeaders(headers)
    );
  }

  @Get('products')
  async getAllProducts(
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip = '0',
    @Query('take') take = '10',
    @Query('minPrice') minPrice = '0',
    @Query('maxPrice') maxPrice = '9999',
  ) {
    return await super.getSortedProducts(
      sortBy,
      sortOrder,
      +skip,
      +take,
      +minPrice,
      +maxPrice,
    );
  }

  @Get('product/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number, @Headers() headers: any) {
    return await super.findProductById(id, getTokenFromHeaders(headers));
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

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Delete('product/:id')
  async deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return await super.removeProductById(id);
  }
}
