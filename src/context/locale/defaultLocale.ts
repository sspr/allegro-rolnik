import { AppLocale } from './appLocale.enum';

const usersLocalce = navigator.language.substring(0, 2);

export const defaultLocale: AppLocale =
  usersLocalce === 'pl' || 'en' ? (usersLocalce as AppLocale) : ('en' as AppLocale);
