import { Module } from '@nestjs/common';
import { PostsController } from '../infra/http/controllers/posts.controller';
import { PostsService } from './posts.service';
import { PrismaModule } from '../infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
