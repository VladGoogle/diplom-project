import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CategoryDto } from '../dtos/category.dto';
import { UpdateCategoryDto } from '../dtos/updateCategory.dto';

@Injectable()
export class CategoryQueries {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CategoryDto) {
    try {
      return await this.prisma.category.create({
        data: {
          name: data.name,
          categoryIconId: data.categoryIconId,
        },
        include: {
          categoryIcon: true,
          subcategories: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findCategoryById(id: number) {
    try {
      return await this.prisma.category.findUniqueOrThrow({
        where: { id: id },
        include: {
          categoryIcon: true,
          subcategories: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findCategoryByName(name: string) {
    try {
      return await this.prisma.category.findUniqueOrThrow({
        where: { name: name },
        include: {
          categoryIcon: true,
          subcategories: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findAllCategories() {
    try {
      return await this.prisma.category.findMany({
        include: {
          categoryIcon: true,
          subcategories: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async removeCategoryById(id: number) {
    try {
      const category = await this.prisma.category.delete({
        where: { id: id },
      });
      return { message: `Category with id: ${category.id} has been deleted` };
    } catch (e) {
      console.log(e);
    }
  }

  async removeCategoryByName(name: string) {
    try {
      const category = await this.prisma.category.delete({
        where: { name: name },
      });
      return { message: `User with email: ${category.name} has been deleted` };
    } catch (e) {
      console.log(e);
    }
  }

  async updateCategoryInfo(data: UpdateCategoryDto, id: number) {
    try {
      return await this.prisma.category.update({
        where: { id: id },
        data: {
          name: data.name,
          categoryIconId: data.categoryIconId,
        },
        include: {
          subcategories: true,
          categoryIcon: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
