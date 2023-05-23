import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cart } from '@prisma/client';
import { UserService } from './users.service';
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
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async addProductToCart(data: CartItemDto, authHeader: string): Promise<Cart> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cartQueries.addProductToCart({
      ...data,
      userId: user.id,
    });
  }

  async deleteCartByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cartQueries.deleteCartById(user.id);
  }

  async getCartById(id: number) {
    return await this.cartQueries.getCartById(id);
  }

  async getCartByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    console.log(decodedPayload)
    const user = await this.userService.findUserByEmail(decodedPayload);
    console.log(user)
    return await this.cartQueries.getCartByUserId(user.id);
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
