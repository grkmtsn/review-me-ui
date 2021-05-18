import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './global-style';
import { ConfirmProvider } from '../contexts/ConfirmContext';
export interface ReviewMeThemeProps {
  children: React.ReactNode;
}

const ReviewMeTheme = ({ children }: ReviewMeThemeProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <GlobalStyle />
        {children}
      </ConfirmProvider>
    </ThemeProvider>
  );
};

export default ReviewMeTheme;
