import React from 'react';
import { StyledSmall } from './styles';

export interface SmallProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}

const Small = ({ level = 1, children, ...rest }: SmallProps): JSX.Element => (
  <StyledSmall level={level} {...rest}>
    {children}
  </StyledSmall>
);

export default Small;
