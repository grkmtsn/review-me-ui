import React from 'react';
import { StyledSpace } from './styles';

export interface SpaceProps {
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | number;
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  children: React.ReactNode;
}

const Space = ({
  direction = 'horizontal',
  size = 'small',
  align = 'center',
  wrap = false,
  children,
  ...rest
}: SpaceProps): JSX.Element => (
  <StyledSpace
    direction={direction}
    size={size}
    align={align}
    wrap={wrap ? 1 : 0}
    {...rest}
  >
    {children}
  </StyledSpace>
);

export default Space;
