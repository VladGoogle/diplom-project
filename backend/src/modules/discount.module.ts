import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ProductService } from '../services/product.service';
import { ProductQueries } from '../queries/product.queries';
import { ProductImageService } from '../services/productImage.service';
import { ProductImageQueries } from '../queries/productImage.queries';
import { DiscountQueries } from '../queries/discount.queries';
import { DiscountService } from '../services/discount.service';
import { DiscountController } from '../controllers/discount.controller';
import { WishlistQueries } from '../queries/wishlist.queries';
import { TokenService } from '../services/token.service';

@Module({
  providers: [
    PrismaService,
    DiscountQueries,
    DiscountService,
    ProductService,
    ProductQueries,
    ProductImageService,
    ProductImageQueries,
    WishlistQueries,
    TokenService,
  ],
  exports: [DiscountService],
  controllers: [DiscountController],
})
export class DiscountModule {}
