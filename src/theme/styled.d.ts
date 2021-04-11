import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary100: string;
      primary90: string;
      primary80: string;
      primary70: string;
      primary60: string;
      primary50: string;
      primary40: string;
      primary30: string;
      primary20: string;
      primary10: string;

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
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
      xxxlarge: number;
    };
  }
}
