import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;

      black1: string;
      black2: string;
      black3: string;

      white: string;

      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
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
