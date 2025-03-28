import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { Module } from '@nestjs/common';
import { envSchema } from 'src/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
