import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { ResetPasswordDto } from '../dtos/resetPassword.dto';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';

@Injectable()
export class UserQueries {
  constructor(private prisma: PrismaService) {}

  async signUp(data: UserDto): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException(`User with such email already exists`);
        }
      }
      throw e;
    }
  }

  async findUserById(id: number): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { id: id },
        include: {
          card: true,
          comments: true,
          wishlists: true,
          cart: true,
          orders: true,
          address: true,
          payments: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findUserByEmail(email: string) {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: { email: email },
        include: {
          card: true,
          comments: true,
          wishlists: true,
          cart: true,
          orders: true,
          address: true,
          payments: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findAllUsers() {
    try {
      const users = await this.prisma.user.findMany();
      if (!users.length) {
        return new NotFoundException('No users were found');
      }
      return users;
    } catch (e) {
      console.log(e);
    }
  }

  async removeUserById(id: number) {
    try {
      const user = await this.prisma.user.delete({
        where: { id: id },
      });
      return { message: `User with id: ${user.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async removeUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.delete({
        where: { email },
      });
      return { message: `User with email: ${user.email} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async updateUserInfo(data: UpdateUserDto, email: string) {
    try {
      const user = await this.prisma.user.update({
        where: { email: email },
        data: {
          ...data,
        },
      });
      user.password = undefined;
      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }

  async resetUserPassword(data: ResetPasswordDto, email: string) {
    try {
      const user = await this.findUserByEmail(email);
      const isValid = await bcrypt.compare(data.oldPassword, user.password);

      if (!isValid) {
        throw new BadRequestException(`Invalid old password!`);
      }

      if (data.newPassword !== data.confirmPassword) {
        throw new BadRequestException(`Passwords should be matched`);
      }

      return await this.prisma.user.update({
        where: { id: user.id },
        data: {
          password: await bcrypt.hash(data.newPassword, 10),
        },
      });
    } catch (e) {
      throw e;
    }
  }
  async addAddress(data: AddressDto) {
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

  async updateAddress(data: UpdateAddressDto, id: number) {
    try {
      return await this.prisma.address.update({
        where: { id: id },
        data: {
          ...data,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async changeUserRole(data: ChangeUserRoleDto) {
    try {
      return await this.prisma.user.update({
        where: { email: data.email },
        data: {
          roles: data.role,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`User doesn't exist`);
        }
      }
      throw e;
    }
  }
}
