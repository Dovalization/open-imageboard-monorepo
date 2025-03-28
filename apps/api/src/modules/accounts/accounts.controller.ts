import {
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { AccountsService } from './application/accounts.service';
import { CreateAccountSchema } from './application/dtos/create-account-dto';
import { z } from 'zod';

type CreateAccountBody = z.infer<typeof CreateAccountSchema>;

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateAccountSchema))
  async createAccount(@Body() { name, email, password }: CreateAccountBody) {
    return this.accountsService.createAccount({ name, email, password });
  }
}
