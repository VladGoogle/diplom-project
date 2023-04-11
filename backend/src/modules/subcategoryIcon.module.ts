import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubcategoryIconService } from '../services/subcategoryIcon.service';
import { SubcategoryIconQueries } from '../queries/subcategoryIcon.queries';
import { SubcategoryIconController } from '../controllers/subcategoryIcon.controller';

@Module({
  providers: [SubcategoryIconService, SubcategoryIconQueries, PrismaService],
  exports: [SubcategoryIconService],
  controllers: [SubcategoryIconController],
})
export class SubcategoryIconModule {}
