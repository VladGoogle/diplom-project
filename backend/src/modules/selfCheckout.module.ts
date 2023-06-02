import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { SelfCheckoutService } from '../services/selfCheckout.service';
import { SelfCheckoutQueries } from '../queries/selfCheckout.queries';
import { SelfCheckoutController } from '../controllers/selfCheckout.controller';

@Module({
  providers: [SelfCheckoutService, SelfCheckoutQueries, PrismaService],
  exports: [SelfCheckoutService],
  controllers: [SelfCheckoutController],
})
export class SelfCheckoutModule {}
