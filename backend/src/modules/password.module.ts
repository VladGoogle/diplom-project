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
import { AuthService } from '../services/auth.service';
import { UserQueries } from '../queries/user.queries';
import StripeService from '../services/stripe.service';
import { PasswordQueries } from '../queries/password.queries';
import { PasswordService } from '../services/password.service';
import { MailerService } from '@nestjs-modules/mailer';
import { PasswordController } from '../controllers/password.controller';

@Module({
  providers: [
    PasswordQueries,
    PasswordService,
    PrismaService,
    UserService,
    UserQueries,
    AuthService,
    StripeService,
  ],
  exports: [PasswordService],
  controllers: [PasswordController],
})
export class PasswordModule {}
