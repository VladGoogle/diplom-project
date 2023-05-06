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

@Controller()
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post('carts')
  async addProductToCart(@Body() data: CartItemDto, @Headers() headers: any) {
    const token = getTokenFromHeaders(headers);
    return await this.cartService.addProductToCart(
      {
        ...data,
      },
      token,
    );
  }

  @Get('cart/:id')
  async getCartById(@Param('id', ParseIntPipe) id: number) {
    return await this.cartService.getCartById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('cart/removeItem')
  async deleteCartItemFromCart(
    @Body() removeItemFromCartDto: RemoveItemFromCartDto,
  ) {
    return await this.cartService.removeCartItemFromCart(
      removeItemFromCartDto.cartId,
      removeItemFromCartDto.cartItemId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('cart')
  async deleteCartById(@Headers() headers: any) {
    const token = getTokenFromHeaders(headers);
    return await this.cartService.deleteCartById(token);
  }
}
