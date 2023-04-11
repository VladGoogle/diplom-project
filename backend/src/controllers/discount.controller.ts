import {
  Controller,
  Body,
  Post,
  Param,
  ParseIntPipe,
  UseGuards,
  Headers,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { DiscountService } from '../services/discount.service';
import { DiscountDto } from '../dtos/discount.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Controller()
export class DiscountController {
  constructor(private discountService: DiscountService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Patch('product/:id/discount')
  async deleteDiscountFromProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.discountService.deleteDiscountFromProduct(id);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.NETWORK_ADMIN, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Post('product/:id/discount')
  async addDiscountToTheProduct(
    @Body() data: DiscountDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.discountService.addDiscountToTheProduct(data, id);
  }

  @Get('discount/:id')
  async getCartById(@Param('id', ParseIntPipe) id: number) {
    return await this.discountService.getDiscountById(id);
  }
}
