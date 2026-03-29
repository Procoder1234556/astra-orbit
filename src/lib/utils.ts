import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats large numbers with 'k' suffix for thousands.
 * @example 1200 -> "1.2k", 900 -> "900"
 */
export const formatNumber = (n: number) => {
  if (n < 1000) return String(n);
  return `${(n / 1000).toFixed(1)}k`.replace(".0k", "k");
};

/**
 * Calculates percentage progress toward the next rank threshold.
 * Includes a guard against divide-by-zero errors (Issue 10A).
 */
export const getRankProgress = (points: number, threshold: number) => {
  if (threshold <= 0) return 0;
  const progress = Math.round((points / threshold) * 100);
  return Math.min(Math.max(progress, 0), 100); // Clamp between 0-100
};
