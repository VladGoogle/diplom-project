import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './users.service';
import { WishlistQueries } from '../queries/wishlist.queries';
import { WishlistItemDto } from '../dtos/wishlistItem.dto';
import { TokenService } from './token.service';

@Injectable()
export class WishlistService {
  constructor(
    private prisma: PrismaService,
    private wishlistQueries: WishlistQueries,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async addProductToWishlist(data: WishlistItemDto, authHeader: string) {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.wishlistQueries.addProductToWishlist({
      ...data,
      userId: user.id,
    });
  }

  async deleteWishlistById(id: number) {
    return await this.wishlistQueries.deleteWishlistById(id);
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
