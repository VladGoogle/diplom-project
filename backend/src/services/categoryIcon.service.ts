import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';
import { CategoryIcon } from '@prisma/client';

@Injectable()
export class CategoryIconService {
  constructor(
    private prisma: PrismaService,
    private categoryIconQueries: CategoryIconQueries,
  ) {}

  async uploadCategoryIcon(
    data: Buffer,
    filename: string,
  ): Promise<CategoryIcon> {
    return await this.categoryIconQueries.uploadCategoryIcon(data, filename);
  }

  async getCategoryIconById(id: number): Promise<CategoryIcon> {
    return await this.categoryIconQueries.getCategoryIconById(id);
  }
}
