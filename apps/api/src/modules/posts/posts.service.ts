import { AuthService } from 'src/auth/auth.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infra/database/prisma/prisma.service';
import type { Request } from 'express';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async createPostInThread(threadId: string, content: string, req: Request) {
    const anonId = this.authService.getAnonId(req, threadId);
    req.

    return this.prisma.post.create({
      data: { content, threadId, authorId: anonId },
    });
  }

  async deletePost(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
