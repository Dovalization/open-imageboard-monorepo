import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { z } from 'zod';
import { LoginSchema } from './auth.types';
import { AuthService } from './auth.service';
import { AnonymousService } from './anonymous.service';

type CreateSessionBody = z.infer<typeof LoginSchema>;

@Controller('sessions')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly anonymousService: AnonymousService, // Inject AnonymousService
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(LoginSchema))
  async createSession(@Body() body: Partial<CreateSessionBody>) {
    if (!body.email || !body.password) {
      // Use AnonymousService for anonymous session
      const { token } = this.anonymousService.generateAnonymousToken();
      return { access_token: token };
    }

    const { access_token } = await this.authenticationService.authenticate({
      email: body.email,
      password: body.password,
    });

    return { access_token };
  }
}
