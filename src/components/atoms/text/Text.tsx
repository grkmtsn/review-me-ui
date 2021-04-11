import React from 'react';
import { StyledText } from './styles';

export interface TextProps {
  level?: 1 | 2;
  color?: 'primary' | 'black' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const Text = ({
  level = 1,
  color = 'black',
  children,
  ...rest
}: TextProps): JSX.Element => (
  <StyledText level={level} color={color} {...rest}>
    {children}
  </StyledText>
);

export default Text;
