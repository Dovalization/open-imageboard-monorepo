import { Account } from './account.entity';
import { Repository } from '../../../repository';

export abstract class AccountsRepository implements Repository<Account> {
  abstract findOne(where: Partial<Account>): Promise<Account | null>;
  abstract findMany(where?: Partial<Account> | undefined): Promise<Account[]>;
  abstract create(data: Omit<Account, 'id'>): Promise<Account>;
  abstract update(
    where: Partial<Account>,
    data: Partial<Account>,
  ): Promise<Account>;
  abstract delete(where: Partial<Account>): Promise<void>;
  abstract findByEmail(email: string): Promise<Account | null>;
}
