import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { AuthService } from '../services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { CardService } from '../services/card.service';
import { CardQueries } from '../queries/card.queries';
import { CardController } from '../controllers/card.controller';
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

@Module({
  providers: [
    UserService,
    UserQueries,
    AuthService,
    PrismaService,
    JwtService,
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
  ],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
