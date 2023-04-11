import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cart, CartItem, Comment, Order } from '@prisma/client';
import { OrderQueries } from '../queries/order.queries';
import { OrderDto } from '../dtos/order.dto';
import { AuthService } from './auth.service';
import { UserService } from './users.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private orderQueries: OrderQueries,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  async createOrder(authHeader: string, cartId: number): Promise<Order> {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.orderQueries.createOrder(
      {
        userId: user.id,
      },
      cartId,
    );
  }

  async getOrderById(id: number) {
    return await this.orderQueries.getOrderById(id);
  }

  async getAllOrdersByUserId(authHeader: string) {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.orderQueries.getAllOrdersByUserId(user.id);
  }

  async deleteAllOrdersByUserId(authHeader: string) {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.orderQueries.deleteAllOrdersByUserId(user.id);
  }

  async updateOrderStatus(orderId: number, status: 'RECEIVED' | 'RETURNED') {
    return await this.orderQueries.updateOrderStatus(orderId, status);
  }
}
