import React from 'react';
import { StyledSmall } from './styles';

export interface SmallProps {
  level?: 1 | 2 | 3;
  color?: 'primary' | 'black' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const Small = ({
  level = 1,
  color = 'black',
  children,
  ...rest
}: SmallProps): JSX.Element => (
  <StyledSmall level={level} color={color} {...rest}>
    {children}
  </StyledSmall>
);

export default Small;
