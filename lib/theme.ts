import { Breakpoints, Colors, FeanutTheme, Fonts } from "@/interfaces/theme";

const colors: Colors = {
  primary: "#FF9900",
  red: "#FA4135",
  white: "#FFFFFF",
  black: "#1D1D1F",
  darkGrey: "#7F7E84",
  mediumGrey: "#E2E2E8",
  lightGrey: "#F5F5F5",
  blue: "#3478F6",
};

const breakpoints: Breakpoints = {
  xs: "36em",
  sm: "48em",
  md: "64em",
  lg: "90em",
};

const fonts: Fonts = {
  pretendar: {
    bold: "Pretendard-Bold",
    medium: "Pretendard-Medium",
    semiBold: "Pretendard-SemiBold",
  },
};

const theme: FeanutTheme = {
  colors,
  breakpoints,
  fonts,
};

export default theme;
