import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { Env } from 'src/env';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { z } from 'zod';

const TokenSchema = z.object({
  sub: z.string().uuid(),
});

type TokenSchema = z.infer<typeof TokenSchema>;

const AnonymousTokenSchema = z.object({
  sub: z.string().uuid(),
  anon: z.literal(true),
});

type AnonymousTokenSchema = z.infer<typeof AnonymousTokenSchema>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService<Env, true>) {
    const publicKey = configService.get('JWT_PUBLIC_KEY', { infer: true });

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    });
  }

  validate(payload: TokenSchema | AnonymousTokenSchema) {
    if ('anon' in payload && payload.anon === true) {
      // Allow anonymous users
      return AnonymousTokenSchema.parse(payload);
    }
    return TokenSchema.parse(payload);
  }
}
