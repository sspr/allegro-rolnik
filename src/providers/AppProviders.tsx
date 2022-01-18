import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { UrlContextController } from 'context/url/urlContextController/UrlContextController';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <LocaleContextController>
      <UrlContextController>{children}</UrlContextController>
    </LocaleContextController>
  </ThemeProvider>
);
