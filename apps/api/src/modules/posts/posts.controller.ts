import { Controller, Req, Delete, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Request } from 'express';

@Controller('boards/:boardId/threads/:threadId/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':threadId')
  createPost(@Req() req: Request, @Param('threadId') threadId: string) {
    return this.postsService.createPostInThread(
      threadId,
      req.body.content,
      req,
    );
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
