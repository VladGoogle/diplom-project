import {
  Controller,
  Body,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
  Headers,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { OrderService } from '../services/order.service';
import { SetSectionAddressDto } from '../dtos/setSectionAddress.dto';
import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post('cart/:id/confirm')
  async createOrder(
    @Headers() headers: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.orderService.createOrder(
      getTokenFromHeaders(headers),
      id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('account/orders')
  async getAllOrdersByUserId(@Headers() headers: any) {
    return await this.orderService.getAllOrdersByUserId(
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('account/orders')
  async deleteAllOrdersByUserId(@Headers() headers: any) {
    return await this.orderService.deleteAllOrdersByUserId(
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('order/:id')
  async setSectionAddressToOrder(
    @Body() data: SetSectionAddressDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.orderService.setSectionAddressToOrder({
      orderId: id,
      ...data,
    });
  }
}
