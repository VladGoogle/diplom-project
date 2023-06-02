import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { SelfCheckoutDto } from '../dtos/selfCheckout.dto';
import { SelfCheckoutService } from '../services/selfCheckout.service';
import { CheckoutSectionDto } from '../dtos/checkoutSection.dto';

@Controller()
export class SelfCheckoutController {
  constructor(private selfCheckoutService: SelfCheckoutService) {}

  @UseGuards(JwtAuthGuard)
  @Post('checkoutCity')
  async addNewSelfCheckoutCity(@Body() data: SelfCheckoutDto) {
    return await this.selfCheckoutService.addNewSelfCheckoutCity(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkoutSection')
  async addNewSelfCheckoutSection(@Body() data: CheckoutSectionDto) {
    return await this.selfCheckoutService.addNewSelfCheckoutSection(data);
  }

  @Get('checkoutCities')
  async getAllCities() {
    return await this.selfCheckoutService.getAllCities();
  }

  @Get('checkoutCities/:id')
  async getAllSectionsById(@Param('id', ParseIntPipe) id: number) {
    return await this.selfCheckoutService.getAllSectionsById(id);
  }
}
