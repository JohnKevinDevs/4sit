import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function stripPlaceholder(value?: string): string | undefined {
  if (!value) return value;
  const trimmed = value.trim();

  if (/^placeholder\s*[:-]/i.test(trimmed)) {
    return trimmed.replace(/^placeholder\s*[:-]\s*/i, "");
  }

  return value;
}
