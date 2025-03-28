import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';

@Injectable()
export class AnonymousService {
  constructor(private readonly jwtService: JwtService) {}

  generateAnonymousToken(): { anonId: string; token: string } {
    const anonId = randomUUID();
    const token = this.jwtService.sign({ sub: anonId, anon: true });
    return { anonId, token };
  }
}
