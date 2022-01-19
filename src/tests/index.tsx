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
import { queries, Queries, render, RenderOptions } from '@testing-library/react';
import { UrlParamsContextController } from 'context/urlParams/urlParamsContextController/UrlParamsContextController';

type CustomRenderOptions<Q extends Queries = typeof queries> = RenderOptions<Q> & {
  locale?: AppLocale;
};

const customRender = (ui: ReactElement, options?: Omit<CustomRenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: AppProvidersProps) => {
    const [locale, setLocale] = useState(options?.locale ?? AppLocale.en);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <UrlParamsContextController>
          <IntlProvider defaultLocale={AppLocale.en} key={locale} locale={locale} messages={translations[locale]}>
            <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
          </IntlProvider>
        </UrlParamsContextController>
      </ThemeProvider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
