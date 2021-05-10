import React from 'react';
import { StyledSubTitle } from './styles';

export interface SubTitleProps {
  level?: 1 | 2;
  invert?: boolean;
  children: React.ReactNode;
}

const SubTitle = ({
  level = 1,
  invert = false,
  children,
  ...rest
}: SubTitleProps): JSX.Element => (
  <StyledSubTitle level={level} invert={invert} {...rest}>
    {children}
  </StyledSubTitle>
);

export default SubTitle;
