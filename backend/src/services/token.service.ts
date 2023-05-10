import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from '../interfaces/payload.interface';

@Injectable()
export class TokenService extends JwtService {
  public async decodeAuthToken(authHeader: string) {
    const decodedJwt = super.decode(authHeader) as PayloadInterface;
    return decodedJwt.email;
  }
}
