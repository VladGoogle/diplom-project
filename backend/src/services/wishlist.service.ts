import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WishlistQueries } from '../queries/wishlist.queries';
import { WishlistItemDto } from '../dtos/wishlistItem.dto';
import { TokenService } from './token.service';

@Injectable()
export class WishlistService {
  constructor(
    private prisma: PrismaService,
    private wishlistQueries: WishlistQueries,
    private tokenService: TokenService,
  ) {}

  async addProductToWishlist(data: WishlistItemDto, authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.wishlistQueries.addProductToWishlist({
      ...data,
      userId: decodedPayload.id,
    });
  }

  async deleteWishlistByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.wishlistQueries.deleteWishlistByUserId(decodedPayload.id);
  }

  async getWishlistByUserId(authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.wishlistQueries.getWishlistByUserId(decodedPayload.id);
  }

  async getWishlistById(id: number) {
    return await this.wishlistQueries.getWishlistById(id);
  }

  async removeWishlistItemFromWishlist(
    wishlistId: number,
    wishlistItemId: number,
  ) {
    return await this.wishlistQueries.removeWishlistItemFromWishlist(
      wishlistId,
      wishlistItemId,
    );
  }
}
