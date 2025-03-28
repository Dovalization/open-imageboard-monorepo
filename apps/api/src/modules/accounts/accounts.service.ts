import { Account } from './account.entity';
import { AccountsRepository } from './accounts-repository';
import { CreateAccountDTO } from './create-account-dto';
import { Injectable } from '@nestjs/common';

// Assuming you're using DTO for input validation

@Injectable()
export class AccountsService {
  constructor(
    private readonly accountsRepository: AccountsRepository, // Inject the AccountRepository
  ) {}

  // Method to create a new account
  async createAccount({
    email,
    name,
    password,
  }: CreateAccountDTO): Promise<Account> {
    // Check if the account already exists
    const existingAccount = await this.accountsRepository.findByEmail(email);

    if (existingAccount) {
      throw new Error('Account with this email already exists');
    }

    // Create a new account entity and hash the password
    const account = new Account({ email, name });
    await account.setPassword(password); // Hash the password using the entity method

    // Save the account to the repository
    return this.accountsRepository.create(account);
  }

  // Method to get an account by email
  async getAccountByEmail(email: string): Promise<Account | null> {
    return this.accountsRepository.findByEmail(email);
  }
}
