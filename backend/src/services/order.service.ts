import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Order } from '@prisma/client';
import { OrderQueries } from '../queries/order.queries';
import { UserService } from './users.service';
import { TokenService } from './token.service';
import {SetSectionAddressDto} from "../dtos/setSectionAddress.dto";

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private orderQueries: OrderQueries,
    private tokenService: TokenService,
    private userService: UserService,
  ) {}

  async createOrder(authHeader: string, cartId: number): Promise<Order> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
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
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.orderQueries.getAllOrdersByUserId(user.id);
  }

  async deleteAllOrdersByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.orderQueries.deleteAllOrdersByUserId(user.id);
  }

  async updateOrderStatus(orderId: number, status: 'RECEIVED' | 'RETURNED') {
    return await this.orderQueries.updateOrderStatus(orderId, status);
  }

  async setSectionAddressToOrder(data: SetSectionAddressDto) {
    return await this.orderQueries.setSectionAddressToOrder(data);
  }
}
