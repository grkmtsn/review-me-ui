import React from 'react';
import { StyledSubTitle } from './styles';

export interface SubTitleProps {
  level?: 1 | 2;
  children: React.ReactNode;
}

const SubTitle = ({
  level = 1,
  children,
  ...rest
}: SubTitleProps): JSX.Element => (
  <StyledSubTitle level={level} {...rest}>
    {children}
  </StyledSubTitle>
);

export default SubTitle;
