import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { JwtService } from '@nestjs/jwt';
import StripeService from '../services/stripe.service';
import { OrderService } from '../services/order.service';
import { OrderQueries } from '../queries/order.queries';
import { OrderController } from '../controllers/order.controller';
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
    TokenService,
    PrismaService,
    OrderService,
    OrderQueries,
    StripeService,
    CartService,
    CartQueries,
    ProductService,
    ProductQueries,
    ProductImageQueries,
    ProductImageService,
    WishlistQueries
  ],
  exports: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
