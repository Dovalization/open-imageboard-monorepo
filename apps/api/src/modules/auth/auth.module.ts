import { ConfigModule, ConfigService } from '@nestjs/config';

import { AnonymousService } from './anonymous.service';
import { AnonymousStrategy } from './anonymous.strategy';
import { AuthService } from './auth.service';
import { AuthenticationController } from './auth.controller';
import { Env } from '@api/env';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory(configService: ConfigService<Env, true>) {
        const privateKey = configService.get('JWT_PRIVATE_KEY', {
          infer: true,
        });
        const publicKey = configService.get('JWT_PUBLIC_KEY', { infer: true });

        return {
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
          signOptions: { expiresIn: '7d', algorithm: 'RS256' },
        };
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthService, AnonymousService, JwtStrategy, AnonymousStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
