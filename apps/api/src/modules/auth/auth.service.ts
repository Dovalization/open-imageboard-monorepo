import { AccountsRepository } from '../accounts/domain/accounts-repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './auth.types';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountsRepository: AccountsRepository,
    private readonly jwtService: JwtService,
  ) {}

  // Authenticate a user and return a JWT token
  async authenticate({
    email,
    password,
  }: LoginDTO): Promise<{ access_token: string }> {
    const user = await this.accountsRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Account credentials do not match');
    }

    const isPasswordValid = user.verifyPassword(password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Account credentials do not match');
    }

    const accessToken = this.jwtService.sign({ sub: user.id });

    return { access_token: accessToken };
  }
}
