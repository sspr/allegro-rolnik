import { createContext } from 'react';
import { defaultLocale } from '../defaultLocale';

import { LocaleContextValuesTypes } from './localeContext.types';

export const localeContext = createContext<LocaleContextValuesTypes>({
  locale: defaultLocale,
  setLocale: (locale) => {},
});
