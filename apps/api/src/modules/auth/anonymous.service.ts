import { ConfigService } from '@nestjs/config';
import { Env } from '@api/env';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { z } from 'zod';

const AnonymousSessionSchema = z.object({
  ip: z.string().ip(),
  createdAt: z.date(),
  lastActivityAt: z.date(),
  actionCount: z.number().int(),
  expiresAt: z.date(),
});

type AnonymousSession = z.infer<typeof AnonymousSessionSchema>;

@Injectable()
export class AnonymousService {
  private readonly anonymousSessions: Map<string, AnonymousSession> = new Map(); // In-memory store for now

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<Env, true>,
  ) {}

  // Generate a unique anonymous ID and store session data
  createAnonymousSession(ip: string, sessionTTL: number) {
    const anonymousId = randomUUID(); // Generate a random UUID
    const expiresAt = new Date(Date.now() + sessionTTL); // Set expiration for 24 hours

    // Store the session in memory with expiration timestamp
    this.anonymousSessions.set(
      anonymousId,
      AnonymousSessionSchema.parse({
        ip,
        createdAt: new Date(),
        lastActivityAt: new Date(),
        actionCount: 0,
        expiresAt, // Store expiration timestamp
      }),
    );

    const payload = {
      anonymousId,
    };

    // Generate a JWT with the anonymous UUID and sign it
    const token = this.jwtService.sign(payload, {
      expiresIn: '24h', // Set the expiration time of the JWT (1 day)
    });

    return {
      anonymous_token: token, // Return the JWT token
    };
  }

  // Retrieve session data for an anonymous user by UUID
  getSessionById(anonymousId: string): AnonymousSession | null {
    const session = this.anonymousSessions.get(anonymousId);
    if (!session) {
      return null; // Return null if session not found
    }

    // Check if session is expired
    if (session.expiresAt < new Date()) {
      this.anonymousSessions.delete(anonymousId); // Expired, remove from store
      return null;
    }

    // Update last activity time and action count
    session.lastActivityAt = new Date();
    return AnonymousSessionSchema.parse(session); // Return the session
  }

  // Method to verify and decode the JWT to extract the UUID
  verifyAnonymousJwt(token: string): string | null {
    const decoded = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_ANON_SECRET', { infer: true }), // Use JWT secret to verify the token
    });
    return decoded.anonymousId ?? null; // Return the anonymous ID if present
  }

  // Increment action count (for rate limiting, moderation, etc.)
  incrementActionCount(anonymousId: string): void {
    const session = this.anonymousSessions.get(anonymousId);
    if (session) {
      session.actionCount += 1;
      session.lastActivityAt = new Date();
    }
  }

  // Ban or delete an anonymous user session
  banUserSession(anonymousId: string): void {
    this.anonymousSessions.delete(anonymousId); // Simply remove the session
  }
}
