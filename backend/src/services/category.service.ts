import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CategoryQueries } from '../queries/category.queries';
import { CategoryDto } from '../dtos/category.dto';
import { UpdateCategoryDto } from '../dtos/updateCategory.dto';
import { UploadCategoryImageService } from '../classes/uploadImage.class';
import { CategoryIconQueries } from '../queries/categoryIcon.queries';
import { Files } from '../interfaces/image.interface';
import { UploadImageDto } from '../dtos/uploadImage.dto';

@Injectable()
export class CategoryService extends UploadCategoryImageService {
  constructor(
    private prisma: PrismaService,
    private categoryQueries: CategoryQueries,
    categoryIconQueries: CategoryIconQueries,
  ) {
    super(categoryIconQueries);
  }

  async createCategory(
    data: CategoryDto,
    imageData: UploadImageDto,
    iconData: UploadImageDto,
  ) {
    const category = await this.categoryQueries.createCategory({
      ...data,
    });

    await Promise.all([
      super.uploadCategoryImage(imageData, category.id),
      super.uploadCategoryIcon(iconData, category.id),
    ]);

    return this.findCategoryById(category.id);
  }

  async findCategoryById(id: number) {
    return await this.categoryQueries.findCategoryById(id);
  }

  async findCategoryByName(name: string) {
    return await this.categoryQueries.findCategoryByName(name);
  }

  async findAllCategories() {
    return await this.categoryQueries.findAllCategories();
  }

  async removeCategoryById(id: number) {
    return await this.categoryQueries.removeCategoryById(id);
  }

  async removeCategoryByName(name: string) {
    return await this.categoryQueries.removeCategoryByName(name);
  }

  async updateCategoryInfo(data: UpdateCategoryDto, id: number) {
    return await this.categoryQueries.updateCategoryInfo(data, id);
  }
}
