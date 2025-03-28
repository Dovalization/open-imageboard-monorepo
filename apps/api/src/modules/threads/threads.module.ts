import { Module } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { PrismaModule } from '../database/prisma/prisma.module';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';

@Module({
  imports: [PrismaModule],
  providers: [ThreadsService, PostsService],
  controllers: [ThreadsController],
})
export class ThreadsModule {}
