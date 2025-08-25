// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to safely merge Tailwind CSS classes.
 * This is a standard utility provided by shadcn/ui.
 * @param inputs - A list of class names or conditional class objects.
 * @returns A string of combined, de-duplicated class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
