import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { AuthService } from '../services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { CartService } from '../services/cart.service';
import { CartQueries } from '../queries/cart.queries';
import { CartController } from '../controllers/cart.controller';
import { ProductService } from '../services/product.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductImageService } from '../services/productImage.service';
import { ProductImageQueries } from '../queries/productImage.queries';
import StripeService from '../services/stripe.service';
import { CartGateway } from '../gateways/cart.gateway';

@Module({
  providers: [
    UserService,
    UserQueries,
    AuthService,
    PrismaService,
    JwtService,
    CartService,
    CartQueries,
    ProductService,
    ProductQueries,
    ProductImageService,
    ProductImageQueries,
    StripeService,
    CartGateway,
  ],
  exports: [CartService],
  controllers: [CartController],
})
export class CartModule {}
