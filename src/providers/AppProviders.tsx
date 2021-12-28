import { AppProvidersProps } from './AppProviders.types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme.styles';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
