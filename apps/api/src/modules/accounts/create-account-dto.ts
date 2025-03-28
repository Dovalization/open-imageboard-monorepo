import { z } from 'zod';

// Define the Zod schema for creating an account
export const CreateAccountSchema = z.object({
  name: z.string().min(3, 'Username must be at least 3 characters long'), // Validate name length
  email: z.string().email('Invalid email format'), // Validate that the email is a valid email format
  password: z.string().min(8, 'Password must be at least 8 characters long'), // Validate password length
});

export type CreateAccountDTO = z.infer<typeof CreateAccountSchema>; // Type inferred from the schema
