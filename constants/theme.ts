import { DefaultTheme } from "styled-components/native";

export const lightTheme: DefaultTheme = {
  colors: {
    background: "#f5f5f5", // light gray background
    gradientFrom: "#af67e9", // top gradient color
    gradientTo: "#6565e7", // bottom gradient color
    text: "#4d4d4d",
    textMuted: "#9495a5",
    card: "#ffffff",
    border: "#e5e5e5",
    primary: "#3a7bfd", // accent blue
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "#181824",
    gradientFrom: "#373b53",
    gradientTo: "#141625",
    text: "#cacde8",
    textMuted: "#777a92",
    card: "#25273c",
    border: "#393a4b",
    primary: "#3a7bfd",
  },
};

export const Colors = {
  light: {
    tint: "#3a7bfd",
  },
  dark: {
    tint: "#3a7bfd",
  },
};
