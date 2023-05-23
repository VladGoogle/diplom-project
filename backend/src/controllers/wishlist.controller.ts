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
import { RemoveItemFromWishlistDto } from '../dtos/removeItemFromWishlist.dto';
import { WishlistService } from '../services/wishlist.service';
import { WishlistItemDto } from '../dtos/wishlistItem.dto';
import { getTokenFromHeaders } from '../utilities/getAuthToken.utility';

@Controller()
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Get('wishlist/getByToken')
  async getWishlistByUserId(@Headers() headers: any) {
    return await this.wishlistService.getWishlistByUserId(
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('wishlist/removeItem')
  async removeWishlistItemFromWishlist(
    @Body() body: RemoveItemFromWishlistDto,
  ) {
    return await this.wishlistService.removeWishlistItemFromWishlist(
      body.wishlistId,
      body.wishlistItemId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('wishlist/deleteByToken')
  async deleteWishlistById(@Headers() headers: any) {
    return await this.wishlistService.deleteWishlistByUserId(
      getTokenFromHeaders(headers),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('wishlists')
  async addProductToWishlist(
    @Body() data: WishlistItemDto,
    @Headers() headers: any,
  ) {
    return await this.wishlistService.addProductToWishlist(
      {
        ...data,
      },
      getTokenFromHeaders(headers),
    );
  }

  @Get('wishlist/:id')
  async getWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.getWishlistById(id);
  }
}
