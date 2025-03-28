import { compare, hash } from 'bcryptjs';

import { CreateAccountSchema } from './create-account-dto';
import { randomUUID } from 'crypto';
import { z } from 'zod';

const AccountProps = CreateAccountSchema.pick({ email: true, name: true });
type AccountProps = z.infer<typeof AccountProps>;

export class Account {
  public readonly id: string;
  public email: string;
  public name: string;
  private passwordHash: string;
  constructor({ email, name }: AccountProps) {
    this.id = randomUUID();
    this.email = email;
    this.name = name;
    this.passwordHash = '';
  }

  async setPassword(password: string): Promise<void> {
    this.passwordHash = await hash(password, 8);
  }

  async verifyPassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
