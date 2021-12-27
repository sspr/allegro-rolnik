import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.color.text.black};
    font-size: ${({ theme }) => theme.fontSize.primary};
  }

  a {
    color: ${({ theme }) => theme.color.text.black};
  }

  a,
  a:hover {
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.color.secondaryLight};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.header};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.subheader};
  }

  h2,
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`;
