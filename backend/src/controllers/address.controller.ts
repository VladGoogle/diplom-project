import {
  Body,
  Controller,
  Get,
  Headers,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';
import { AddressService } from '../services/address.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';

@Controller()
export class AddressController {
  constructor(private addressService: AddressService) {}

  @UseGuards(JwtAuthGuard)
  @Post('account/address')
  async addUserAddress(@Body() data: AddressDto, @Headers() headers: any) {
    return await this.addressService.addUserAddress(
      {
        ...data,
      },
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/address')
  async updateUserAddress(
    @Body() data: UpdateAddressDto,
    @Headers() headers: any,
  ) {
    return await this.addressService.updateUserAddress(
      data,
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('account/address')
  async getUserAddressByUserId(@Headers() headers: any) {
    return await this.addressService.getUserAddressByUserId(
      getTokenFromHeaders(headers),
    );
  }
}
