import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AddressDto } from '../dtos/address.dto';
import { UpdateAddressDto } from '../dtos/updateAddress.dto';
import { AddressQueries } from '../queries/address.queries';
import { TokenService } from './token.service';

@Injectable()
export class AddressService {
  constructor(
    private prisma: PrismaService,
    private addressQueries: AddressQueries,
    private tokenService: TokenService,
  ) {}

  async addUserAddress(data: AddressDto) {
    return await this.addressQueries.addUserAddress(data);
  }

  async updateUserAddress(data: UpdateAddressDto, authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.addressQueries.updateUserAddress(data, decodedPayload.id);
  }

  async getUserAddressByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.addressQueries.getUserAddressByUserId(decodedPayload.id);
  }
}
