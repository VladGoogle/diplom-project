import {
  Controller,
  Body,
  Post,
  UseGuards,
  Param,
  Get,
  Delete,
  Patch,
  Headers,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
import { EmailDto } from '../dtos/email.dto';
import { AddressDto } from '../dtos/address.dto';
import { ResetPasswordDto } from '../dtos/resetPassword.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post('account/addresses')
  async addAddress(@Body() data: AddressDto, @Headers() headers: any) {
    return await this.userService.addAddress(
      data,
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/userInfo')
  async updateUserInfo(@Body() data: UpdateUserDto, @Headers() headers: any) {
    return await this.userService.updateUserInfo(
      data,
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/password')
  async resetPassword(@Body() data: ResetPasswordDto, @Headers() headers: any) {
    return await this.userService.resetUserPassword(
      data,
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN)
  @UseGuards(JwtAuthGuard)
  @Patch('account/changeRole')
  async changeUserRole(@Body() data: ChangeUserRoleDto) {
    return await this.userService.changeUserRole(data);
  }

  @Get('user/findByEmail')
  async getUserByEmail(@Body() data: EmailDto) {
    return await this.userService.findUserByEmail(data.email);
  }

  @Get('user/getByToken')
  async getUserByToken(@Headers() headers: any) {
    return await this.userService.getUserByToken(getTokenFromHeaders(headers));
  }

  @Delete('user/deleteByEmail')
  async deleteUserByEmail(@Body() data: EmailDto) {
    return await this.userService.removeUserByEmail(data.email);
  }

  @Get('users')
  async getAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get('user/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUserById(id);
  }

  @Delete('user/:id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.removeUserById(id);
  }
}
