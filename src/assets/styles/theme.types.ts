export type Theme = {
  fontSize: {
    primary: string;
    secondary: string;
    header: string;
    subheader: string;
  };
  color: {
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    text: {
      black: string;
      grey: string;
    };
    border: {
      grey: string;
      lightgrey: string;
    };
    background: {
      grey: string;
      white: string;
    };
  };
  width: {
    small: string;
    mobile: string;
  };
};
