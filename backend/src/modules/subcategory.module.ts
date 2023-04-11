import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubcategoryService } from '../services/subcategory.service';
import { SubcategoryQueries } from '../queries/subcategory.queries';
import { SubcategoryController } from '../controllers/subcategory.controller';
import { SubcategoryIconService } from '../services/subcategoryIcon.service';
import { SubcategoryIconQueries } from '../queries/subcategoryIcon.queries';

@Module({
  providers: [
    SubcategoryService,
    SubcategoryQueries,
    SubcategoryIconService,
    SubcategoryIconQueries,
    PrismaService,
  ],
  exports: [SubcategoryService],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
