/**
 * Reads a CSS custom property from the document root at runtime and returns
 * it as a valid hsl() colour string.
 *
 * WHY: Third-party libraries like Recharts accept colour strings in props
 * (e.g. stroke="..." fill="...") and cannot consume CSS custom properties
 * directly. This helper bridges the gap so chart colours stay in sync with
 * the design token system defined in index.css.
 *
 * @example
 *   getCssVar("--primary")        // "hsl(250 85% 65%)"
 *   getCssVar("--muted-foreground") // "hsl(220 12% 55%)"
 *
 * @param name - The CSS custom property name, including the leading "--".
 * @returns A CSS hsl() string, or an empty string in non-browser environments.
 */
export function getCssVar(name: string): string {
  if (typeof window === "undefined") return "";
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return `hsl(${value})`;
}
