import { Module } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { PrismaModule } from './prisma.module';
import { UserQueries } from '../queries/user.queries';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from '../services/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserQueries, PrismaService, JwtService],
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
