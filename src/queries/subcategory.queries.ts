import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SubcategoryDto } from '../dtos/subcategory.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubcategoryQueries {
  constructor(private prisma: PrismaService) {}

  async createSubcategory(data: SubcategoryDto) {
    try {
      return await this.prisma.subcategory.create({
        data: {
          ...data,
        },
        include: {
          subcategoryIcon: true,
          category: {
            include: {
              categoryIcon: true,
            },
          },
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException(
            `Subcategory with such name already exists`,
          );
        }
      }
      throw e;
    }
  }

  async findSubcategoryById(id: number) {
    try {
      return await this.prisma.subcategory.findUniqueOrThrow({
        where: { id: id },
        include: {
          category: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findSubcategoryByName(name: string) {
    try {
      return await this.prisma.subcategory.findUniqueOrThrow({
        where: { name: name },
        include: {
          category: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findAllSubcategories() {
    try {
      return await this.prisma.subcategory.findMany({
        include: {
          category: true,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findAllSubcategoriesByCategoryId(id: number) {
    try {
      return await this.prisma.subcategory.findMany({
        where: { categoryId: id },
        include: {
          category: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Category doesn't exist`);
        }
      }
      throw e;
    }
  }

  async removeSubcategoryById(id: number) {
    try {
      const subcategory = await this.prisma.subcategory.delete({
        where: { id: id },
      });
      return {
        message: `Category with id: ${subcategory.id} has been deleted`,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        }
      }
      throw e;
    }
  }

  async removeSubcategoryByName(name: string) {
    try {
      const subcategory = await this.prisma.subcategory.delete({
        where: { name: name },
      });
      return {
        message: `User with email: ${subcategory.name} has been deleted`,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        }
      }
      throw e;
    }
  }

  async updateSubcategoryInfo(data: SubcategoryDto, id: number) {
    try {
      return await this.prisma.subcategory.update({
        where: { id: id },
        data: {
          ...data,
        },
        include: {
          subcategoryIcon: true,
          category: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Subcategory doesn't exist`);
        } else if (e.code === 'P2002') {
          throw new BadRequestException(
            `Subcategory with such name already exists`,
          );
        }
      }
      throw e;
    }
  }
}
