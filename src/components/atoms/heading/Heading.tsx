import React from 'react';
import { StyledHeading } from './styles';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading = ({ as, children, ...rest }: HeadingProps): JSX.Element => (
  <StyledHeading as={as} {...rest}>
    {children}
  </StyledHeading>
);

export default Heading;
