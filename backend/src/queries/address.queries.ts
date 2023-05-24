import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';

@Injectable()
export class AddressQueries {
  constructor(private prisma: PrismaService) {}

  async addUserAddress(data: AddressDto) {
    try {
      return await this.prisma.address.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async updateUserAddress(data: UpdateAddressDto, id: number) {
    try {
      return await this.prisma.address.update({
        where: { userId: id },
        data: {
          ...data,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async getUserAddressByUserId(id: number) {
    try {
      return await this.prisma.address.findUniqueOrThrow({
        where: { userId: id },
      });
    } catch (e) {
      throw e;
    }
  }
}
