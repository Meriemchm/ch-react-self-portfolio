import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name (at least 2 characters)" }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),

  subject: z
    .string()
    .min(2, { message: "Please enter a subject" }),

  message: z
    .string()
    .min(5, { message: "Your message must be at least 5 characters long" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;