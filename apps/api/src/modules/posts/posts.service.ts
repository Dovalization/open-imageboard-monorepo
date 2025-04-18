import { AuthService } from '@api/modules/auth/auth.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@api/modules/database/prisma/prisma.service';
import type { Request } from 'express';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPostInThread({
    threadId,
    authorId,
    content,
  }: {
    threadId: string;
    authorId: string;
    content: string;
  }) {
    return this.prisma.post.create({
      data: { content, threadId, authorId },
    });
  }

  async deletePost(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
