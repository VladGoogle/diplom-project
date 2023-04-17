import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Cart, CartItem, Comment } from '@prisma/client';
import { CommentQueries } from '../queries/comment.queries';
import { CommentDto } from '../dtos/comment.dto';
import { UserService } from './users.service';
import { AuthService } from './auth.service';
import { UpdateCommentDto } from '../dtos/updateComment.dto';
import { CartQueries } from '../queries/cart.queries';
import { CartItemDto } from '../dtos/cartItem.dto';
import {UpdateCartItemQuantityDto} from "../dtos/updateCartItemQuantity.dto";

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private cartQueries: CartQueries,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  async addProductToCart(data: CartItemDto, authHeader: string): Promise<Cart> {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cartQueries.addProductToCart({
      ...data,
      userId: user.id,
    });
  }

  async deleteCartById(authHeader: string) {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.cartQueries.deleteCartById(user.id);
  }

  async getCartById(id: number) {
    return await this.cartQueries.getCartById(id);
  }

  async updateCartItemQuantity(data: UpdateCartItemQuantityDto) {
    return await this.cartQueries.updateCartItemQuantity(data);
  }

  async removeCartItemFromCart(cartId: number, cartItemId: number) {
    return await this.cartQueries.removeCartItemFromCart(cartId, cartItemId);
  }

  async deleteAllItemsFromCart(cartId: number): Promise<{ message: string }> {
    return await this.cartQueries.deleteAllItemsFromCart(cartId);
  }
}
