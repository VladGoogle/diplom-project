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
import { CartService } from '../services/cart.service';
import { CartItemDto } from '../dtos/cartItem.dto';

import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';
import { RemoveItemFromCartDto } from '../dtos/removeItemFromCart.dto';
import { UpdateCartItemQuantityDto } from '../dtos/updateCartItemQuantity.dto';

@Controller()
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post('carts')
  async addProductToCart(@Body() data: CartItemDto, @Headers() headers: any) {
    return await this.cartService.addProductToCart(
      data,
      getTokenFromHeaders(headers),
    );
  }

  @Get('cart/:id')
  async getCartById(@Param('id', ParseIntPipe) id: number) {
    return await this.cartService.getCartById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('cart')
  async deleteCartById(@Headers() headers: any) {
    return await this.cartService.deleteCartById(getTokenFromHeaders(headers));
  }

  @UseGuards(JwtAuthGuard)
  @Patch('cart/updateItem')
  async updateCartItemQuantity(@Body() data: UpdateCartItemQuantityDto) {
    return await this.cartService.updateCartItemQuantity(data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('cart/removeItem')
  async removeItemFromCart(@Body() data: RemoveItemFromCartDto) {
    return await this.cartService.removeCartItemFromCart(data);
  }
}
