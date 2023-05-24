import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { JwtService } from '@nestjs/jwt';
import { ProductService } from '../services/product.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductImageService } from '../services/productImage.service';
import { ProductImageQueries } from '../queries/productImage.queries';
import { WishlistService } from '../services/wishlist.service';
import { WishlistQueries } from '../queries/wishlist.queries';
import { WishlistController } from '../controllers/wishlist.controller';
import StripeService from '../services/stripe.service';
import { TokenService } from '../services/token.service';

@Module({
  providers: [
    TokenService,
    PrismaService,
    JwtService,
    WishlistService,
    WishlistQueries,
    ProductService,
    ProductQueries,
    ProductImageService,
    ProductImageQueries,
    StripeService,
  ],
  exports: [WishlistService],
  controllers: [WishlistController],
})
export class WishlistModule {}
