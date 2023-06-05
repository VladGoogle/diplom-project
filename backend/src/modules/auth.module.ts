import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import * as dotenv from 'dotenv';
import { AuthStrategy } from '../strategies/auth.strategy';
import { AuthController } from '../controllers/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from '../services/users.service';
import { PrismaService } from '../services/prisma.service';
import { UserQueries } from '../queries/user.queries';
import { UsersModule } from './users.module';
import StripeService from '../services/stripe.service';
import { TokenService } from '../services/token.service';
dotenv.config();

@Module({
  imports: [
    {
      ...JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secretOrKeyProvider: () => configService.get<string>('JWTKEY'),
          signOptions: {
            expiresIn: '2h',
          },
        }),
        inject: [ConfigService],
      }),
      global: true,
    },
  ],
  providers: [
    AuthService,
    AuthStrategy,
    UserService,
    UserQueries,
    UsersModule,
    PrismaService,
    StripeService,
    TokenService,
  ],
  exports: [JwtModule, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
