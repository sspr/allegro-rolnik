import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`${({ theme: { color, fontSize } }) => css`
  body {
    font-family: 'Open Sans', sans-serif;
    color: ${color.text.black};
    font-size: ${fontSize.primary};
  }

  a {
    color: ${color.text.black};
  }

  a,
  a:hover {
    text-decoration: none;
  }

  a:hover {
    color: ${color.secondaryLight};
  }

  h2 {
    font-size: ${fontSize.header};
  }

  h3 {
    font-size: ${fontSize.subheader};
  }

  h2,
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`}
`;
