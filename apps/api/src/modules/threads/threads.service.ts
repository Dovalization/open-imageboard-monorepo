import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class ThreadsService {
  constructor(private prisma: PrismaService) {}

  async getThreadsInBoard(boardId: string) {
    return this.prisma.thread.findMany({
      where: { boardId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createThread({
    boardId,
    title,
    authorId,
    content,
  }: {
    boardId: string;
    title: string;
    authorId: string;
    content: string;
  }) {
    return this.prisma.thread.create({
      data: { boardId, title, authorId, content },
    });
  }

  async getThreadWithPosts(threadId: string) {
    return this.prisma.thread.findUnique({
      where: { id: threadId },
      include: { posts: { orderBy: { createdAt: 'asc' } } },
    });
  }

  async deleteThread(id: string) {
    return this.prisma.thread.delete({ where: { id } });
  }
}
