import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Comment } from '@prisma/client';
import { CommentQueries } from '../queries/comment.queries';
import { CommentDto } from '../dtos/comment.dto';
import { UpdateCommentDto } from '../dtos/updateComment.dto';
import { TokenService } from './token.service';

@Injectable()
export class CommentService {
  constructor(
    private prisma: PrismaService,
    private commentQueries: CommentQueries,
    private tokenService: TokenService,
  ) {}

  async addComment(data: CommentDto, authHeader: string): Promise<Comment> {
    const decodedPayload = await this.tokenService.decodeAuthToken(authHeader);
    return await this.commentQueries.addComment({
      ...data,
      userId: decodedPayload.id,
    });
  }

  async findCommentById(id: number) {
    return await this.commentQueries.findCommentById(id);
  }

  async getAllCommentsByProductId(id: number) {
    return await this.commentQueries.findAllCommentsByProductId(id);
  }

  async getAllCommentsByUserId(id: number) {
    return await this.commentQueries.findAllCommentsByUserId(id);
  }

  async deleteCommentById(id: number) {
    return await this.commentQueries.deleteCommentById(id);
  }

  async updateCommentById(data: UpdateCommentDto, id: number) {
    return await this.commentQueries.updateCommentById(id, data);
  }
}
