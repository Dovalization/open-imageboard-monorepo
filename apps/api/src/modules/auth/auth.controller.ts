import { Body, Controller, Post, UsePipes } from '@nestjs/common';

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { z } from 'zod';
import { LoginSchema } from './auth.types';
import { AuthService } from './auth.service';

type CreateSessionBody = z.infer<typeof LoginSchema>;

@Controller('sessions')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(LoginSchema))
  async createSession(@Body() { email, password }: CreateSessionBody) {
    const { access_token } = await this.authenticationService.authenticate({
      email,
      password,
    });

    return {
      access_token,
    };
  }
}
