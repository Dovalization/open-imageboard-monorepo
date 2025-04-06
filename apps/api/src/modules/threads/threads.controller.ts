import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { PostsService } from '@api/modules/posts/posts.service';

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
    @Body('authorId') authorId: string,
    @Body('content') content: string,
  ) {
    return this.threadsService.createThread({
      boardId,
      title,
      authorId,
      content,
    });
  }

  @Get(':threadId')
  async getThread(@Param('threadId') threadId: string) {
    return this.threadsService.getThreadWithPosts(threadId);
  }

  @Post(':threadId/posts')
  async createPost(
    @Param('threadId') threadId: string,
    @Body('authorId') authorId: string,
    @Body('content') content: string,
    x,
  ) {
    return this.postsService.createPostInThread({
      threadId,
      authorId,
      content,
    });
  }

  @Delete(':threadId')
  async deleteThread(@Param('threadId') threadId: string) {
    return this.threadsService.deleteThread(threadId);
  }
}
