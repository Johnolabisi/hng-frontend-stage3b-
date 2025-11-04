import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      border: string;
      card: string;
      text: string;
      primary: string;
      gradientFrom: string;
      gradientTo: string;
      textMuted: string;
    };
  }
}