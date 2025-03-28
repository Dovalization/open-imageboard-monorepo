import { Account } from '../domain/account.entity';
import { AccountsRepository } from '../domain/accounts-repository';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from '../../database/prisma/prisma-repository';

@Injectable()
export class PrismaAccountsRepository
  extends PrismaRepository<Account>
  implements AccountsRepository
{
  constructor(prisma: PrismaClient) {
    super(prisma, prisma.user);
  }

  async findByEmail(email: string): Promise<Account | null> {
    return this.findOne({ email });
  }

  async findOne(where: Partial<Account>): Promise<Account | null> {
    return this.findOne(where);
  }

  async findMany(where?: Partial<Account>): Promise<Account[]> {
    return this.findMany(where);
  }

  async create(data: Omit<Account, 'id'>): Promise<Account> {
    return this.create(data);
  }

  async update(
    where: Partial<Account>,
    data: Partial<Account>,
  ): Promise<Account> {
    return this.update(where, data);
  }

  async delete(where: Partial<Account>): Promise<void> {
    return this.delete(where);
  }
}
