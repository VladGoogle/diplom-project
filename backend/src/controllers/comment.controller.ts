import {
  Controller,
  Body,
  Post,
  Param,
  Get,
  Delete,
  Patch,
  ParseIntPipe,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { CommentDto } from '../dtos/comment.dto';
import { AuthUser } from '../decorators/user.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UpdateCommentDto } from '../dtos/updateComment.dto';

@Controller()
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Get('user/:id/comments')
  async getAllCommentsByUserId(@Param('id', ParseIntPipe) id: number) {
    return await this.commentService.getAllCommentsByUserId(id);
  }

  @Get('product/:id/comments')
  async getAllCommentsByProductId(@Param('id', ParseIntPipe) id: number) {
    return await this.commentService.getAllCommentsByProductId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('product/:id/comments')
  async addComment(
    @Body() data: CommentDto,
    @Headers() headers: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];
    return await this.commentService.addComment(
      {
        ...data,
        productId: id,
      },
      token,
    );
  }

  @Get('product/:productId/comment/:commentId')
  async getCommentById(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('commentId', ParseIntPipe) commentId: number,
  ) {
    return await this.commentService.findCommentById(commentId);
  }

  @Patch('product/:productId/comment/:commentId')
  async updateProductInfo(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('commentId', ParseIntPipe) commentId: number,
    @Body() data: UpdateCommentDto,
  ) {
    return await this.commentService.updateCommentById(data, commentId);
  }

  @Delete('product/:productId/comment/:commentId')
  async deleteCommentById(
    @Param('productId', ParseIntPipe) productId: number,
    @Param('commentId', ParseIntPipe) commentId: number,
  ) {
    return await this.commentService.deleteCommentById(commentId);
  }
}
