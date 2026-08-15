import { cookies } from "next/headers";

export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  if (!value) {
    return false;
  }

  return locales.includes(value as Locale);
}

export async function getLocale(): Promise<Locale> {
  const localeFromCookie = cookies().get("locale")?.value;

  if (isLocale(localeFromCookie)) {
    return localeFromCookie;
  }

  return defaultLocale;
}

export function pickText(
  text: Record<Locale, string>,
  locale: Locale
): string {
  return text[locale] ?? text[defaultLocale];
}
