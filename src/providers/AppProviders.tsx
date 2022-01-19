import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { UrlParamsContextController } from 'context/urlParams/urlParamsContextController/UrlParamsContextController';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <UrlParamsContextController>
      <LocaleContextController>{children}</LocaleContextController>
    </UrlParamsContextController>
  </ThemeProvider>
);
