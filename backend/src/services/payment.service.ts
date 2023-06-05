import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Payment } from '@prisma/client';
import { UserService } from './users.service';
import { PaymentQueries } from '../queries/payment.queries';
import StripeService from './stripe.service';
import { OrderService } from './order.service';
import { CartService } from './cart.service';
import { TokenService } from './token.service';

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
    private paymentQueries: PaymentQueries,
    private userService: UserService,
    private tokenService: TokenService,
    private stripeService: StripeService,
    private orderService: OrderService,
    private cartService: CartService,
  ) {}

  async createPayment(orderId: number, authHeader: string): Promise<Payment> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload.email);
    const order = await this.orderService.getOrderById(orderId);
    const charge = await this.stripeService.createCharge({
      currency: user.card.currency.toString(),
      amount: Math.floor(order.amount * 100),
      source: user.card.cardSource,
      customer: user.customerToken,
    });

    //Delete the cart
    await this.cartService.deleteCartByUserId(authHeader);

    //Update products quantity
    const orderItems = order.orderItems;
    const queries = orderItems.map((item)=>{
      return this.prisma.product.update({
        where: { id: item.productId },
        data: {
          qtyInStock:{
            decrement: item.quantity
          }
        },
      });
    })
    await Promise.all(queries);

    //Create payment record in the DB
    return await this.paymentQueries.createPayment({
      orderId: orderId,
      userId: user.id,
      cardId: user.card.id,
      chargeToken: charge.id,
    });
  }

  async createRefundForPayment(orderId: number): Promise<Payment> {
    const order = await this.orderService.getOrderById(orderId);
    const refund = await this.stripeService.createRefund(
      order.payment.chargeToken,
    );

    this.orderService.updateOrderStatus(orderId, 'RETURNED');

    //Update products quantity
    const orderItems = order.orderItems;
    const queries = orderItems.map((item)=>{
      return this.prisma.product.update({
        where: { id: item.productId },
        data: {
          qtyInStock:{
            increment: item.quantity
          }
        },
      });
    })
    await Promise.all(queries);

    //Update payment record in the DB
    return await this.paymentQueries.createRefundForPayment(refund.id, orderId);
  }
}
