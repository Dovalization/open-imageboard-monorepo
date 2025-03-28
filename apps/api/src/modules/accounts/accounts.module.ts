import { AccountsRepository } from './accounts-repository';
import { AccountsService } from './accounts.service';
import { Module } from '@nestjs/common';
import { PrismaAccountsRepository } from './prisma-accounts-repository';
import { PrismaModule } from '../database/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import PrismaModule, which provides the PrismaAccountRepository
  providers: [
    AccountsService, // Service that uses AccountRepository
    { provide: AccountsRepository, useClass: PrismaAccountsRepository }, // Bind AccountRepository to PrismaAccountRepository
  ],
  exports: [AccountsService], // Export AccountService for use in other modules
})
export class AccountModule {}
