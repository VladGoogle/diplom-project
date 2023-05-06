import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
import { UserQueries } from '../queries/user.queries';
import { ResetPasswordDto } from '../dtos/resetPassword.dto';
import { AddressDto } from '../dtos/address.dto';
import { PayloadInterface } from '../interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';

@Injectable()
export class UserService {
  private stripe: Stripe;
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private userQueries: UserQueries,
    private jwtService: JwtService,
  ) {
    this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2022-11-15',
    });
  }

  async signUp(data: UserDto) {
    return await this.userQueries.signUp(data);
  }

  async findUserById(id: number) {
    return await this.userQueries.findUserById(id);
  }

  async findUserByEmail(email: string) {
    return await this.userQueries.findUserByEmail(email);
  }

  async getUserByToken(authHeader: string) {
    const decodedJwt = this.jwtService.decode(authHeader) as PayloadInterface;
    return await this.findUserByEmail(decodedJwt.email);
  }

  async findAllUsers() {
    return await this.userQueries.findAllUsers();
  }

  async removeUserById(id: number) {
    return await this.userQueries.removeUserById(id);
  }

  async removeUserByEmail(email: string) {
    return await this.userQueries.removeUserByEmail(email);
  }

  async updateUserInfo(data: UpdateUserDto, authHeader: string) {
    const decodedJwt = this.jwtService.decode(authHeader) as PayloadInterface;
    return await this.userQueries.updateUserInfo(data, decodedJwt.email);
  }

  async resetUserPassword(data: ResetPasswordDto, authHeader: string) {
    const decodedJwt = this.jwtService.decode(authHeader) as PayloadInterface;
    return await this.userQueries.resetUserPassword(data, decodedJwt.email);
  }

  async addAddress(data: AddressDto, authHeader: string) {
    const user = await this.getUserByToken(authHeader);
    const address = await this.userQueries.addAddress({
      ...data,
      userId: user.id,
    });
    await this.stripe.customers.update(user.customerToken, {
      address: {
        city: data.city,
        country: data.country,
        postal_code: data.postal_code,
        line1: data.address_line1,
        line2: data.address_line2,
      },
    });
    return address;
  }

  async updateAddress(data: UpdateAddressDto, authHeader: string) {
    const user = await this.getUserByToken(authHeader);
    const address = await this.userQueries.updateAddress(data, user.address.id);
    await this.stripe.customers.update(user.customerToken, {
      address: {
        ...data,
      },
    });
    return address;
  }

  async changeUserRole(data: ChangeUserRoleDto) {
    return await this.userQueries.changeUserRole(data);
  }
}
