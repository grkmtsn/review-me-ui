import React from 'react';
import { StyledSubTitle } from './styles';

export interface SubTitleProps {
  level?: 1 | 2;
  invert?: boolean;
  color?: 'primary' | 'white' | 'black' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const SubTitle = ({
  level = 1,
  invert = false,
  color = 'black',
  children,
  ...rest
}: SubTitleProps): JSX.Element => (
  <StyledSubTitle level={level} color={color} invert={invert} {...rest}>
    {children}
  </StyledSubTitle>
);

export default SubTitle;
