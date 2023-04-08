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
import { CartItemDto } from '../dtos/cartItem.dto';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { OrderDto } from '../dtos/order.dto';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post('cart/:id/confirm')
  async createOrder(
    @Headers() headers: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.orderService.createOrder(token, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('account/orders')
  async getAllOrdersByUserId(@Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.orderService.getAllOrdersByUserId(token);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('account/orders')
  async deleteAllOrdersByUserId(@Headers() headers: any) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.orderService.deleteAllOrdersByUserId(token);
  }
}
