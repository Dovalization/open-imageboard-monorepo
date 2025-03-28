import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthenticationController } from './auth.controller';
import { Env } from 'src/env';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule,
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
  providers: [JwtStrategy],
  controllers: [AuthenticationController],
  exports: [JwtModule],
})
export class AuthenticationModule {}
