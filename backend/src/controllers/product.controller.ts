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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SearchInterface } from '../interfaces/search.interface';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Role } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { Prisma } from '@prisma/client';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('search')
  async getAllProductsBySearchQuery(
    @Query() search: SearchInterface,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
  ) {
    return await this.productService.findAllProductsBySearchQuery(
      search.searchQuery,
      sortBy,
      sortOrder,
      skip,
      take,
    );
  }

  @Get('product/findByName')
  async getProductByName(@Body() name: string) {
    return await this.productService.findProductByName(name);
  }
  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Delete('product/deleteByName')
  async deleteProductByName(@Body() name: string) {
    return await this.productService.removeProductByName(name);
  }

  @Get('category/:id/products')
  async getAllProductsByCategoryId(
    @Param('id', ParseIntPipe) id: number,
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip: any = 0,
    @Query('take') take: any = 10,
  ) {
    return await this.productService.findAllProductsByCategoryId(
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
    return await this.productService.findAllProductsBySubcategoryId(
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
  @UseInterceptors(FileInterceptor('file'))
  async createCategory(
    @UploadedFile() file,
    @Req() req,
    @Body() data: ProductDto,
  ) {
    return await this.productService.createProduct(
      {
        ...data,
        categoryId: parseInt(data.categoryId.toString()),
        subcategoryId: parseInt(data.subcategoryId.toString()),
        price: parseFloat(data.price.toString()),
        qtyInStock: parseInt(data.qtyInStock.toString()),
      },
      file.buffer,
      file.originalname,
    );
  }

  @Get('products')
  async getAllProducts(
    @Query('sortBy') sortBy: 'name' | 'price' = 'name',
    @Query('sortOrder') sortOrder: Prisma.SortOrder = 'asc',
    @Query('skip') skip: any = 0,
    @Query('take') take: any = 10,
  ) {
    return await this.productService.getSortedProducts(
      sortBy,
      sortOrder,
      parseInt(skip),
      parseInt(take),
    );
  }

  @Get('product/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.findProductById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @Patch('product/:id')
  async updateProductInfo(
    @Body() data: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.productService.updateProductInfo(data, id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @Delete('product/:id')
  async deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.removeProductById(id);
  }
}
