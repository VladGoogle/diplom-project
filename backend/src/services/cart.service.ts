import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cart } from '@prisma/client';
import { CartQueries } from '../queries/cart.queries';
import { CartItemDto } from '../dtos/cartItem.dto';
import { UpdateCartItemQuantityDto } from '../dtos/updateCartItemQuantity.dto';
import { RemoveItemFromCartDto } from '../dtos/removeItemFromCart.dto';
import { TokenService } from './token.service';

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private cartQueries: CartQueries,
    private tokenService: TokenService,
  ) {}

  async addProductToCart(data: CartItemDto, authHeader: string): Promise<Cart> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.cartQueries.addProductToCart({
      ...data,
      userId: decodedPayload.id,
    });
  }

  async deleteCartByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.cartQueries.deleteCartByUserId(decodedPayload.id);
  }

  async getCartById(id: number) {
    return await this.cartQueries.getCartById(id);
  }

  async getCartByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.cartQueries.getCartByUserId(decodedPayload.id);
  }

  async updateCartItemQuantity(data: UpdateCartItemQuantityDto) {
    return await this.cartQueries.updateCartItemQuantity(data);
  }

  async removeCartItemFromCart(data: RemoveItemFromCartDto) {
    return await this.cartQueries.removeCartItemFromCart(data);
  }

  async deleteAllItemsFromCart(cartId: number): Promise<{ message: string }> {
    return await this.cartQueries.deleteAllItemsFromCart(cartId);
  }
}
