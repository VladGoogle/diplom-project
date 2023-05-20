import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SubcategoryIcon } from '@prisma/client';
import { SubcategoryIconQueries } from '../queries/subcategoryIcon.queries';

@Injectable()
export class SubcategoryIconService {
  constructor(
    private prisma: PrismaService,
    private subcategoryIconQueries: SubcategoryIconQueries,
  ) {}

  async uploadSubcategoryIcon(
    data: Buffer,
    filename: string,
  ){
    return await this.subcategoryIconQueries.uploadSubcategoryIcon(
      data,
      filename,
    );
  }

  async getSubcategoryIconById(id: number): Promise<SubcategoryIcon> {
    return await this.subcategoryIconQueries.getSubcategoryIconById(id);
  }
}
