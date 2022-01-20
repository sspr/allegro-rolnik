import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { QueryParamProvider } from 'use-query-params';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LocaleContextController>{children}</LocaleContextController>
      </ThemeProvider>
    </QueryParamProvider>
  </Router>
);
