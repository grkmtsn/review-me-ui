import React from 'react';
import { StyledText } from './styles';

export interface TextProps {
  level?: 1 | 2;
  children: React.ReactNode;
}

const Text = ({ level = 1, children, ...rest }: TextProps): JSX.Element => (
  <StyledText level={level} {...rest}>
    {children}
  </StyledText>
);

export default Text;
