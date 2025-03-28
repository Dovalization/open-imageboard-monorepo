import { Injectable } from '@nestjs/common';
import { PrismaService } from '../modules/database/prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async getAllBoards() {
    return this.prisma.board.findMany();
  }

  async createBoard(name: string) {
    return this.prisma.board.create({ data: { name } });
  }
}
