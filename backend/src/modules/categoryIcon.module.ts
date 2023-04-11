import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';
import { CategoryIconService } from '../services/categoryIcon.service';
import { CategoryIconController } from '../controllers/categoryIcon.controller';

@Module({
  providers: [CategoryIconService, CategoryIconQueries, PrismaService],
  exports: [CategoryIconService],
  controllers: [CategoryIconController],
})
export class CategoryIconModule {}
