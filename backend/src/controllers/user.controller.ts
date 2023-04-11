import {
  Controller,
  Body,
  Post,
  Res,
  UseGuards,
  Param,
  Get,
  Delete,
  Patch,
  Headers,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../dtos/user.dto';
import { LoginDto } from '../dtos/auth.dto';
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

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post('account/addresses')
  async addAddress(@Body() data: AddressDto, @Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.userService.addAddress(data, token);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/userInfo')
  async updateUserInfo(@Body() data: UpdateUserDto, @Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.userService.updateUserInfo(data, token);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/password')
  async resetPassword(@Body() data: ResetPasswordDto, @Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.userService.resetUserPassword(data, token);
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
  @Delete('user/deleteByEmail')
  async deleteUserByEmail(@Body() data: EmailDto) {
    return await this.userService.removeUserByEmail(data.email);
  }

  @Get('users')
  async getAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.findUserById(parseInt(id));
  }

  @Delete('user/:id')
  async deleteUserById(@Param('id') id: string) {
    return await this.userService.removeUserById(parseInt(id));
  }
}
