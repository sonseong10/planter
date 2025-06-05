import { Theme } from "@emotion/react";

const colors = {
  brand: "#61f21d",
  black: "#222",
  primary: "#a1c4fd",
  gray500: "#555",
};

const fontSizes = {
  small: "14px",
  medium: "16px",
  title: "42px",
  subtitle: "20px",
};
const borders = {
  primary: "#e5e7eb",
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSizes;
export type BordersTypes = typeof borders;

// 이 부분은 ThemeProvider로 적용하기 위한 과정이다.
const theme: Theme = {
  colors,
  fontSizes,
  borders,
};

export default theme;
