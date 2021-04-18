import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      warning: string;
      success: string;
      error: string;

      black100: string;
      black80: string;
      black60: string;
      black40: string;
      black20: string;
      black10: string;
      black5: string;

      white: string;
    };
    fontSizes: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      large: number;
      medium: number;
      normal: number;
      small: number;
    };
    spacing: {
      xsmall: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
      xxxlarge: number;
    };
  }
}
