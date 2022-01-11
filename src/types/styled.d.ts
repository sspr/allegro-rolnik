import {} from 'styled-components';
import { Theme } from '../assets/styles/theme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
