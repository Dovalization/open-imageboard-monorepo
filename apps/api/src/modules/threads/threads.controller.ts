import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Req,
  Head,
  Header,
} from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { PostsService } from '../posts/posts.service';
import type { Request,  } from 'express';

@Controller('boards/:boardId/threads')
export class ThreadsController {
  constructor(
    private readonly threadsService: ThreadsService,
    private readonly postsService: PostsService,
  ) {}

  @Get()
  async getThreads(@Param('boardId') boardId: string) {
    return this.threadsService.getThreadsInBoard(boardId);
  }

  @Post()
  async createThread(
    @Param('boardId') boardId: string,
    @Body('title') title: string,
  ) {
    return this.threadsService.createThread({boardId, title});
  }

  @Get(':threadId')
  async getThread(@Param('threadId') threadId: string) {
    return this.threadsService.getThreadWithPosts(threadId);
  }

  @Post(':threadId/posts')
  async createPost(
    @Param('threadId') threadId: string,
    @Body('content') content: string,
    @Req() req: Request,
  ) {
    req.
    return this.postsService.createPostInThread(threadId, content, req);
  }

  @Delete(':threadId')
  async deleteThread(@Param('threadId') threadId: string) {
    return this.threadsService.deleteThread(threadId);
  }
}
