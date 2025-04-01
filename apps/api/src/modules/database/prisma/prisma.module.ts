import { Global, Module } from '@nestjs/common';

import { AccountsRepository } from '@api/modules/accounts/accounts-repository';
import { PrismaRepository } from './prisma-repository';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    PrismaService,
    { provide: AccountsRepository, useClass: PrismaRepository }, // Provide Prisma-specific Account repository
  ],
  exports: [AccountsRepository], // Export for use in other modules
})
export class PrismaModule {}
