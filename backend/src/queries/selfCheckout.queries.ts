import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SelfCheckoutDto } from '../dtos/selfCheckout.dto';
import { CheckoutSectionDto } from '../dtos/checkoutSection.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class SelfCheckoutQueries {
  constructor(private prisma: PrismaService) {}

  async getAllCities() {
    try {
      return await this.prisma.selfCheckout.findMany({
        include: {
          selfCheckoutSections: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getAllSectionsById(id: number) {
    try {
      return await this.prisma.selfCheckout.findUniqueOrThrow({
        where: { id: id },
        include: {
          selfCheckoutSections: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async addNewSelfCheckoutCity(data: SelfCheckoutDto) {
    try {
      return await this.prisma.selfCheckout.create({
        data: {
          ...data,
        },
        include: {
          selfCheckoutSections: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async addNewCheckoutSection(data: CheckoutSectionDto) {
    try {
      return await this.prisma.selfCheckoutSection.create({
        data: {
          ...data,
          sectionNumber: faker.number.int({
            min: 1,
            max: 100,
          }),
          sectionAddress: faker.location.streetAddress(),
        },
        include: {
          selfCheckout: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }
}
