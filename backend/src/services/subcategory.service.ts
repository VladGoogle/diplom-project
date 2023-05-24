import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SubcategoryQueries } from '../queries/subcategory.queries';
import { SubcategoryDto } from '../dtos/subcategory.dto';
import { SubcategoryIconService } from './subcategoryIcon.service';
import { CategoryDto } from '../dtos/category.dto';
import { Subcategory } from '@prisma/client';

@Injectable()
export class SubcategoryService {
  constructor(
    private prisma: PrismaService,
    private subcategoryQueries: SubcategoryQueries,
    private subcategoryIconService: SubcategoryIconService,
  ) {}

  async createSubcategory(
    data: SubcategoryDto,
    buffer: Buffer,
    filename: string,
  ): Promise<Subcategory> {
    const icon = await this.subcategoryIconService.uploadSubcategoryIcon(
      buffer,
      filename,
    );
    return await this.subcategoryQueries.createSubcategory({
      ...data,
      subcategoryIconId: icon.id,
    });
  }

  async findSubcategoryById(id: number) {
    return await this.subcategoryQueries.findSubcategoryById(id);
  }

  async findSubcategoryByName(name: string) {
    return await this.subcategoryQueries.findSubcategoryByName(name);
  }

  async findAllSubcategories() {
    return await this.subcategoryQueries.findAllSubcategories();
  }

  async findAllSubcategoriesByCategoryId(id: number) {
    return await this.subcategoryQueries.findAllSubcategoriesByCategoryId(id);
  }

  async removeSubcategoryById(id: number) {
    return await this.subcategoryQueries.removeSubcategoryById(id);
  }

  async removeSubcategoryByName(name: string) {
    return await this.subcategoryQueries.removeSubcategoryByName(name);
  }

  async updateSubcategoryInfo(data: SubcategoryDto, id: number) {
    return await this.subcategoryQueries.updateSubcategoryInfo(data, id);
  }
}
