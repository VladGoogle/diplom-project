import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { UserDto } from '../dtos/user.dto';
import { LoginDto } from '../dtos/auth.dto';
import { PrismaService } from './prisma.service';
import StripeService from './stripe.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly stripeService: StripeService,
  ) {}

  async signIn(data: LoginDto) {
    const user = await this.userService.findUserByEmail(data.email);

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Invalid user credentials');
    }

    if (user.isBanned === true) {
      throw new ForbiddenException(
        'You are banned from this portal. Please, refer to administrator',
      );
    }
    const access_token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      roles: user.roles,
      isBanned: user.isBanned,
    });
    return { access_token };
  }

  public async signUp(user: UserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    try {
      const createdUser = await this.userService.signUp({
        ...user,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      const userToken = await this.stripeService.createCustomerToken(
        createdUser.firstName,
        createdUser.lastName,
        createdUser.email,
      );
      await this.prismaService.user.update({
        where: { id: createdUser.id },
        data: {
          customerToken: userToken.id,
        },
      });
      return createdUser;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new BadRequestException(`User with such email already exists`);
        }
      }
      throw e;
    }
  }
}
