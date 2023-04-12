import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PaymentService } from '../services/payment.service';

@Controller()
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('order/:id/checkout')
  async payOrder(
    @Headers() headers: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.paymentService.createPayment(id, token);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('account/order/:id/refund')
  async createRefundTheOrder(
    @Headers() headers: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.paymentService.createRefundForPayment(id);
  }
}
