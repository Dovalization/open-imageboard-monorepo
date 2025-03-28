import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BoardsService } from '../../../boards/boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Post()
  async createBoard(@Body('name') name: string) {
    return this.boardsService.createBoard(name);
  }
}
