import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ProductService } from '../services/product.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductController } from '../controllers/product.controller';
import { ProductImageService } from '../services/productImage.service';
import { ProductImageQueries } from '../queries/productImage.queries';
import { CartService } from '../services/cart.service';
import { CartQueries } from '../queries/cart.queries';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import StripeService from '../services/stripe.service';
import { TokenService } from '../services/token.service';
import { WishlistQueries } from '../queries/wishlist.queries';

@Module({
  providers: [
    ProductQueries,
    ProductService,
    PrismaService,
    ProductImageService,
    ProductImageQueries,
    CartService,
    CartQueries,
    UserService,
    TokenService,
    UserQueries,
    StripeService,
    WishlistQueries
  ],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
