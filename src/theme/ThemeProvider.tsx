import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './global-style';

export interface ReviewMeThemeProps {
  children: React.ReactNode;
}

const ReviewMeTheme = ({ children }: ReviewMeThemeProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ReviewMeTheme;
