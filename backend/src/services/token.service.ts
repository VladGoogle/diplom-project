import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from '../interfaces/payload.interface';

@Injectable()
export class TokenService extends JwtService {
  public decodeAuthToken(authHeader: string) {
    return super.decode(authHeader) as PayloadInterface;
  }
}
