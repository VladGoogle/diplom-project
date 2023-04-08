import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cart, CartItem, Comment, Order, Payment } from '@prisma/client';
import { UserService } from './users.service';
import { AuthService } from './auth.service';
import { PaymentQueries } from '../queries/payment.queries';
import { ChargeDto } from '../dtos/charge.dto';
import StripeService from './stripe.service';
import { OrderService } from './order.service';
import { CartService } from './cart.service';

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
    private paymentQueries: PaymentQueries,
    private userService: UserService,
    private authService: AuthService,
    private stripeService: StripeService,
    private orderService: OrderService,
    private cartService: CartService,
  ) {}

  async createPayment(orderId: number, authHeader: string): Promise<Payment> {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    const order = await this.orderService.getOrderById(orderId);
    const charge = await this.stripeService.createCharge({
      currency: user.card.currency.toString(),
      amount: order.amount * 100,
      source: user.card.cardSource,
      customer: user.customerToken,
    });

    //Delete the cart
    await this.cartService.deleteCartById(authHeader);

    //Update products quantity
    const orderItems = order.orderItems;
    await Promise.all(
      orderItems.map(async (orderItem) => {
        const product = await this.prisma.product.findUnique({
          where: { id: orderItem.productId },
        });
        await this.prisma.product.update({
          where: { id: product.id },
          data: { qtyInStock: product.qtyInStock - orderItem.quantity },
        });
      }),
    );

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

    await this.orderService.updateOrderStatus(orderId, 'RETURNED');

    //Update products quantity
    const orderItems = order.orderItems;
    await Promise.all(
      orderItems.map(async (orderItem) => {
        const product = await this.prisma.product.findUnique({
          where: { id: orderItem.productId },
        });
        await this.prisma.product.update({
          where: { id: product.id },
          data: { qtyInStock: product.qtyInStock + orderItem.quantity },
        });
      }),
    );

    //Update payment record in the DB
    return await this.paymentQueries.createRefundForPayment(refund.id, orderId);
  }
}
