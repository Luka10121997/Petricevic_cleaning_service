import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .max(255, 'Name must be at most 255 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email format')
    .max(100, 'Email must be at most 100 characters'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(1, 'Message is required')
    .max(65535, 'Message must be at most 65535 characters')
});

export type FormSchemaType = z.infer<typeof formSchema>;
