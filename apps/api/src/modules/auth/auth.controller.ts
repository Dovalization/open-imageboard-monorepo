import {
  Body,
  Controller,
  Post,
  UsePipes,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'; // Assuming you have a Zod validation pipe
import { LoginSchema } from './auth.types';
import { AuthService } from './auth.service';
import { AnonymousService } from './anonymous.service';
import { Request, Response } from 'express';

interface CreateSessionBody {
  email?: string;
  password?: string;
}

@Controller('sessions')
export class AuthenticationController {
  private readonly sessionTTL = 24 * 60 * 60 * 1000; // Session TTL (1 day)
  constructor(
    private readonly authenticationService: AuthService, // Inject AuthService
    private readonly anonymousService: AnonymousService, // Inject AnonymousService
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(LoginSchema)) // Use Zod validation to validate the request body
  async createSession(
    @Body() body: CreateSessionBody,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const ip = req.ip; // Get the user's IP address

    // If the user is authenticated with Basic Auth (using credentials)
    if (body.email && body.password) {
      const { access_token } = await this.authenticationService.authenticate({
        email: body.email,
        password: body.password,
      });

      // Set the JWT in a secure, HttpOnly cookie
      res.cookie('access_token', access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: this.sessionTTL, // Set cookie expiration (1 day)
      });

      return { access_token }; // Return the JWT token for authenticated users
    }

    // If no credentials are provided (anonymous user)

    if (!body.email && !body.password && ip) {
      const token = this.anonymousService.createAnonymousSession(
        ip,
        this.sessionTTL,
      );

      // Set the JWT token for the anonymous session in a secure, HttpOnly cookie
      res.cookie('anonymous_id', token, {
        httpOnly: true,
        secure: true, // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: this.sessionTTL, // Set cookie expiration (1 day)
      });

      return { token }; // Return the JWT token for anonymous users
    }

    // If neither credentials nor anonymous session is provided, return an error
    return res.status(400).json({ error: 'Invalid request' });
  }
}
