import { Locale } from './config';
import { translations, TranslationKeys } from './translations';

type NestedKeyOf<ObjectType> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : Key;
}[keyof ObjectType & (string | number)];

export type TranslationPath = NestedKeyOf<TranslationKeys>;

export function t(locale: Locale, path: TranslationPath): string {
  const keys = path.split('.');
  let result: any = translations[locale];

  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) break;
  }

  return result ?? path;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];
  return potentialLocale === 'ru' ? 'ru' : 'en';
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}