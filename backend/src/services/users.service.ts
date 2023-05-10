import { Injectable } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
import { UserQueries } from '../queries/user.queries';
import { ResetPasswordDto } from '../dtos/resetPassword.dto';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';
import { TokenService } from './token.service';
import StripeService from './stripe.service';

@Injectable()
export class UserService {
  constructor(
    private tokenService: TokenService,
    private userQueries: UserQueries,
    private stripeService: StripeService,
  ) {}

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
    return await this.findUserByEmail(
      await this.tokenService.decodeAuthToken(authHeader),
    );
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
    return await this.userQueries.updateUserInfo(
      data,
      await this.tokenService.decodeAuthToken(authHeader),
    );
  }

  async resetUserPassword(data: ResetPasswordDto, authHeader: string) {
    return await this.userQueries.resetUserPassword(
      data,
      await this.tokenService.decodeAuthToken(authHeader),
    );
  }

  async addAddress(data: AddressDto, authHeader: string) {
    const user = await this.getUserByToken(authHeader);
    const address = await this.userQueries.addAddress({
      ...data,
      userId: user.id,
    });
    await this.stripeService.updateCustomerAddress(user.customerToken, data);
    return address;
  }

  async updateAddress(data: UpdateAddressDto, authHeader: string) {
    const user = await this.getUserByToken(authHeader);
    const address = await this.userQueries.updateAddress(data, user.address.id);
    await this.stripeService.updateCustomerAddress(user.customerToken, data);
    return address;
  }

  async changeUserRole(data: ChangeUserRoleDto) {
    return await this.userQueries.changeUserRole(data);
  }
}
