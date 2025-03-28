import { z } from 'zod';

// Define the Zod schema for creating an account
export const LoginSchema = z.object({
  email: z.string().email('Invalid email format'), // Validate that the email is a valid email format
  password: z.string().min(8, 'Password must be at least 8 characters long'), // Validate password length
});

export type LoginDTO = z.infer<typeof LoginSchema>; // Type inferred from the schema
