import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import StripeService from '../services/stripe.service';
import { PaymentService } from '../services/payment.service';
import { PaymentQueries } from '../queries/payment.queries';
import { PaymentController } from '../controllers/payment.controller';
import { OrderService } from '../services/order.service';
import { OrderQueries } from '../queries/order.queries';
import { CartService } from '../services/cart.service';
import { CartQueries } from '../queries/cart.queries';
import { ProductService } from '../services/product.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductImageQueries } from '../queries/productImage.queries';
import { ProductImageService } from '../services/productImage.service';
import { TokenService } from '../services/token.service';
import { WishlistQueries } from '../queries/wishlist.queries';

@Module({
  providers: [
    UserService,
    UserQueries,
    TokenService,
    PrismaService,
    PaymentService,
    PaymentQueries,
    StripeService,
    OrderService,
    OrderQueries,
    CartService,
    CartQueries,
    ProductService,
    ProductQueries,
    ProductImageQueries,
    ProductImageService,
    WishlistQueries
  ],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
