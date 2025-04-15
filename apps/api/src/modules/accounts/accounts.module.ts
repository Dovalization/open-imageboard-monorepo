import { AccountsRepository } from './accounts-repository';
import { AccountsService } from './accounts.service';
import { Module } from '@nestjs/common';
import { PrismaAccountsRepository } from './prisma-accounts-repository';
import { PrismaModule } from '../database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    AccountsService,
    { provide: AccountsRepository, useClass: PrismaAccountsRepository }, //
  ],
  exports: [AccountsService],
})
export class AccountModule {}
