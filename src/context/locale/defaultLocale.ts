import { AppLocale } from './appLocale.enum';

const usersLocalce = navigator.language.substring(0, 2);

export const defaultLocale: AppLocale = usersLocalce in AppLocale ? (usersLocalce as AppLocale) : AppLocale.en;

// export const defaultLocale: AppLocale = AppLocale.pl;
