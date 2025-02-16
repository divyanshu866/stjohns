import { z } from "zod";

// Define the schema for the form data
export const signUpSchema = z.object({
  username: z.string().trim().min(2, "Username must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
});

// Define the schema for the form data
export const signInSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
});
