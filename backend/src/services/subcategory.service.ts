import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SubcategoryQueries } from '../queries/subcategory.queries';
import { SubcategoryDto } from '../dtos/subcategory.dto';
import { Subcategory } from '@prisma/client';
import { UploadSubcategoryIconService } from '../classes/uploadImage.class';
import { SubcategoryIconQueries } from '../queries/subcategoryIcon.queries';
import { UploadImageDto } from '../dtos/uploadImage.dto';

@Injectable()
export class SubcategoryService extends UploadSubcategoryIconService {
  constructor(
    private prisma: PrismaService,
    private subcategoryQueries: SubcategoryQueries,
    subcategoryIconQueries: SubcategoryIconQueries,
  ) {
    super(subcategoryIconQueries);
  }

  async createSubcategory(
    data: SubcategoryDto,
    imageData: UploadImageDto,
  ): Promise<Subcategory> {
    const subcategory = await this.subcategoryQueries.createSubcategory({
      ...data,
    });
    await super.uploadSubcategoryIcon(imageData, subcategory.id);

    return await this.findSubcategoryById(subcategory.id);
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
