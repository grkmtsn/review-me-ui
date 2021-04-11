import styled from 'styled-components';
import { h1, h2, h3, h4, h5, h6 } from './variant';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const StyledHeading = styled.h1<HeadingProps>`
  color: ${(props) => props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => {
    switch (props.as) {
      case 'h1':
        return h1;
      case 'h2':
        return h2;
      case 'h3':
        return h3;
      case 'h4':
        return h4;
      case 'h5':
        return h5;
      case 'h6':
        return h6;
      default:
        return h1;
    }
  }}
`;
