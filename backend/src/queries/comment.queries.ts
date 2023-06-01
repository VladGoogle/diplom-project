import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { CommentDto } from '../dtos/comment.dto';
import { UpdateCommentDto } from '../dtos/updateComment.dto';

@Injectable()
export class CommentQueries {
  constructor(private prisma: PrismaService) {}

  async addComment(data: CommentDto) {
    try {
      return await this.prisma.comment.create({
        data: {
          ...data,
        },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              password: false,
            },
          },
          product: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async findCommentById(id: number) {
    try {
      return await this.prisma.comment.findUniqueOrThrow({
        where: { id: id },
        include: {
          user: true,
          product: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Comment doesn't exist`);
        }
      }
      throw e;
    }
  }

  async findAllCommentsByProductId(id: number) {
    try {
      return await this.prisma.comment.findMany({
        where: { productId: id },
        include: {
          user: true,
          product: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async findAllCommentsByUserId(id: number) {
    try {
      return await this.prisma.comment.findMany({
        where: { userId: id },
        include: {
          user: true,
          product: true,
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async updateCommentById(id: number, data: UpdateCommentDto) {
    try {
      return await this.prisma.comment.update({
        where: { id: id },
        data: {
          ...data,
        },
        include: {
          user: true,
          product: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Comment doesn't exist`);
        }
      }
      throw e;
    }
  }

  async deleteCommentById(id: number) {
    try {
      const comment = await this.prisma.comment.delete({
        where: { id: id },
      });
      return { message: `Comment with id: ${comment.id} has been deleted` };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new NotFoundException(`Comment doesn't exist`);
        }
      }
    }
  }
}
