import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../services/token.service';
import { AddressService } from '../services/address.service';
import { AddressQueries } from '../queries/address.queries';
import { AddressController } from '../controllers/address.controller';

@Module({
  providers: [
    TokenService,
    PrismaService,
    JwtService,
    AddressService,
    AddressQueries,
  ],
  exports: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
