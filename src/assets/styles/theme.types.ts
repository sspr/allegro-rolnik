export type Theme = {
  fonts: { import: string; names: { text: string; headers: string } };
  fontSizes: {
    main: string;
    secondary: string;
    header: string;
    secondaryHeader: string;
    price: string;
    priceEnding: string;
  };
  colors: {
    text: {
      main: string;
      secondary: string;
    };
    accent: {
      main: string;
      mainHovered: string;
      secondary: string;
      secondaryHovered: string;
    };
    border: {
      main: string;
      secondary: string;
    };
  };
  dimensions: {
    siteWIdth: string;
    paddings: {
      big: string;
      medium: string;
      small: string;
    };
  };
};
