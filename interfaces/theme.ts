export interface Colors {
  primary: string;
  red: string;
  white: string;
  black: string;
  darkGrey: string;
  mediumGrey: string;
  lightGrey: string;
  blue: string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface FeanutTheme {
  colors: Colors;
  breakpoints: Breakpoints;
}
