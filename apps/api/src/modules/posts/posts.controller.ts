import { Controller, Req, Delete, Param, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Request } from 'express';

@Controller('boards/:boardId/threads/:threadId/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':threadId')
  createPost(
    @Param('threadId') threadId: string,
    @Body('authorId') authorId: string,
    @Body('content') content: string,
  ) {
    return this.postsService.createPostInThread({
      threadId,
      authorId,
      content,
    });
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
