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

export function isPlaceholderAsset(value?: string): boolean {
  return !value || value.includes("/images/placeholders/");
}

export function getAssetFilename(value?: string): string {
  if (!value) return "imagem-pendente";

  return value
    .replace("/images/placeholders/", "")
    .replace(/^\/images\//, "")
    .trim();
}
