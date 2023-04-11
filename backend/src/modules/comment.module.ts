import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { UserService } from '../services/users.service';
import { UserQueries } from '../queries/user.queries';
import { AuthService } from '../services/auth.service';
import { CommentQueries } from '../queries/comment.queries';
import { CommentService } from '../services/comment.service';
import { CommentController } from '../controllers/comment.controller';
import { JwtService } from '@nestjs/jwt';
import StripeService from '../services/stripe.service';

@Module({
  providers: [
    UserService,
    UserQueries,
    AuthService,
    CommentQueries,
    CommentService,
    PrismaService,
    JwtService,
    StripeService,
  ],
  exports: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
