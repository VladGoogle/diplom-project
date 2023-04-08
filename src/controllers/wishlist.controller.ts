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

@Controller()
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

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
  @Post('wishlists')
  async addProductToWishlist(
    @Body() data: WishlistItemDto,
    @Headers() headers: any,
  ) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.wishlistService.addProductToWishlist(
      {
        ...data,
      },
      token,
    );
  }

  @Get('wishlist/:id')
  async getWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.getWishlistById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('wishlist/:id')
  async deleteWishlistById(@Param('id', ParseIntPipe) id: number) {
    return await this.wishlistService.deleteWishlistById(id);
  }
}
