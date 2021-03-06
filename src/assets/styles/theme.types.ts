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
      darkgrey: string;
      white: string;
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
  screenResolution: {
    medium: string;
    small: string;
  };
};
