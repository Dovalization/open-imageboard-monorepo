import { PrismaClient } from '@prisma/client';
import { Repository } from '../../../repository';

export class PrismaRepository<T> implements Repository<T> {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly model: any,
  ) {}

  async findOne(where: Partial<T>): Promise<T | null> {
    return this.model.findUnique({ where });
  }

  async findMany(where?: Partial<T>): Promise<T[]> {
    return this.model.findMany({ where });
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    return this.model.create({ data });
  }

  async update(where: Partial<T>, data: Partial<T>): Promise<T> {
    return this.model.update({ where, data });
  }

  async delete(where: Partial<T>): Promise<void> {
    await this.model.delete({ where });
  }
}
