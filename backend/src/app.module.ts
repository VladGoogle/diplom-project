import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PrismaModule } from './modules/prisma.module';
import { UsersModule } from './modules/users.module';
import { AuthModule } from './modules/auth.module';
import { CategoryModule } from './modules/category.module';
import { CategoryIconModule } from './modules/categoryIcon.module';
import { SubcategoryIconModule } from './modules/subcategoryIcon.module';
import { SubcategoryModule } from './modules/subcategory.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product.module';
import { CommentModule } from './modules/comment.module';
import { CartModule } from './modules/cart.module';
import { WishlistModule } from './modules/wishlist.module';
import { DiscountModule } from './modules/discount.module';
import { CardModule } from './modules/card.module';
import { PaymentModule } from './modules/payment.module';
import { OrderModule } from './modules/order.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { PasswordModule } from './modules/password.module';
import * as path from 'path';
import { AddressModule } from './modules/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: `"No Reply" <${process.env.SMTP_EMAIL}>`,
      },
      template: {
        dir: path.join(__dirname, 'templates'),
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    CategoryModule,
    SubcategoryModule,
    CategoryIconModule,
    SubcategoryIconModule,
    ProductModule,
    CommentModule,
    CartModule,
    WishlistModule,
    DiscountModule,
    CardModule,
    PaymentModule,
    OrderModule,
    PasswordModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
