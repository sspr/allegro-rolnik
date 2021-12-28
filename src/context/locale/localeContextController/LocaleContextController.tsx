import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from '../../../i18n/messages';
import { defaultLocale } from '../defaultLocale';
import { localeContext } from '../localeContext/localeContetx';
import { LocaleContextControllerProps } from './LocaleContextController.types';

export const LocaleContextController = ({ children }: LocaleContextControllerProps) => {
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <IntlProvider defaultLocale={defaultLocale} key={locale} locale={locale} messages={translations[locale]}>
      <localeContext.Provider value={{ locale, setLocale }}>{children}</localeContext.Provider>
    </IntlProvider>
  );
};
