import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "validation.name_required"),
  email: z.string().min(1, "validation.email_required").email("validation.email_invalid"),
  classification: z.string().min(1, "validation.classification_required"),
  message: z.string().min(10, "validation.message_min"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
