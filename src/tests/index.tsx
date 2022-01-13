import { AppProvidersProps } from 'providers/AppProviders.types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import { AppLocale } from 'context/locale/appLocale.enum';
import { translations } from 'i18n/messages';
import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const Wrapper = ({ children }: AppProvidersProps) => {
  const [locale, setLocale] = useState(AppLocale.en);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <IntlProvider defaultLocale={AppLocale.en} key={locale} locale={locale} messages={translations[locale]}>
        <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
      </IntlProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
