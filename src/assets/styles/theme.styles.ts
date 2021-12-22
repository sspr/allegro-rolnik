import { Theme } from './theme.types';

export const theme: Theme = {
  fonts: {
    import: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500&display=swap')",
    names: {
      text: "'Open Sans', sans-serif",
      headers: "'Roboto', sans-serif",
    },
  },
  fontSizes: {
    main: '14px',
    secondary: '13px',
    header: '25px',
    secondaryHeader: '16px',
    price: '30px',
    priceEnding: '21px',
  },
  colors: {
    text: {
      main: '#222',
      secondary: '#767676',
    },
    accent: {
      main: '#ff5a00',
      mainHovered: '#ff7b33',
      secondary: '#00a790',
      secondaryHovered: '#54cab6',
    },
    border: {
      main: '#ddd',
      secondary: '#aaa',
    },
  },
  dimensions: {
    siteWIdth: '1200px',
    paddings: {
      big: '24px',
      medium: '16px',
      small: '8px',
    },
  },
};
