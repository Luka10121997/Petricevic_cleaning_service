import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Title must contain at most 255 character(s)'),
  email: z.string().min(1, 'Email is required').max(100, 'Description must contain at most 100 character(s)'),
  message: z.string().min(1, 'Message is required').max(65535, 'Name must contain at most 65535 character(s)')
});
