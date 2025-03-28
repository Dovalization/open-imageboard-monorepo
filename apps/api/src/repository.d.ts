export interface Repository<T> {
  findOne(where: Partial<T>): Promise<T | null>;
  findMany(where?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(where: Partial<T>, data: Partial<T>): Promise<T>;
  delete(where: Partial<T>): Promise<void>;
}
