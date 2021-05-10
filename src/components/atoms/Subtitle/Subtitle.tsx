import React from 'react';
import { StyledSubtitle } from './styles';

export interface SubtitleProps {
  level?: 1 | 2;
  invert?: boolean;
  children: React.ReactNode;
}

const Subtitle = ({
  level = 1,
  invert = false,
  children,
  ...rest
}: SubtitleProps): JSX.Element => (
  <StyledSubtitle level={level} invert={invert} {...rest}>
    {children}
  </StyledSubtitle>
);

export default Subtitle;
