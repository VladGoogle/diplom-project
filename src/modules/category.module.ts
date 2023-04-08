import { Module } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryQueries } from '../queries/category.queries';
import { CategoryController } from '../controllers/category.controller';
import { PrismaService } from '../services/prisma.service';
import { CategoryIconService } from '../services/categoryIcon.service';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';

@Module({
  providers: [
    CategoryService,
    CategoryQueries,
    CategoryIconQueries,
    PrismaService,
    CategoryIconService,
  ],
  exports: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
