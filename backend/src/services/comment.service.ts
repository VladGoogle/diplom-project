import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Comment } from '@prisma/client';
import { CommentQueries } from '../queries/comment.queries';
import { CommentDto } from '../dtos/comment.dto';
import { UserService } from './users.service';
import { AuthService } from './auth.service';
import { UpdateCommentDto } from '../dtos/updateComment.dto';

@Injectable()
export class CommentService {
  constructor(
    private prisma: PrismaService,
    private commentQueries: CommentQueries,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  async addComment(data: CommentDto, authHeader: string): Promise<Comment> {
    const decodedPayload = await this.authService.decodeAuthToken(authHeader);
    const user = await this.userService.findUserByEmail(decodedPayload);
    return await this.commentQueries.addComment({
      ...data,
      userId: user.id,
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
