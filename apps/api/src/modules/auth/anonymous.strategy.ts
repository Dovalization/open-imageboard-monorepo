import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-anonymous';

@Injectable()
export class AnonymousStrategy extends PassportStrategy(Strategy) {
  async validate(payload: unknown) {
    return {
      anonymous: true,
    };
  }
}
