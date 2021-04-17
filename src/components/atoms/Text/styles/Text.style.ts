import styled from 'styled-components';
import color from './color';
import { setLevel } from './level';

type TextProps = {
  level?: 1 | 2;
  color?: 'primary' | 'white' | 'black' | 'success' | 'warning' | 'error';
};

export const StyledText = styled.p<TextProps>`
  font-style: normal;
  margin: 0;

  ${(props) => color[props.color]}
  ${(props) => setLevel(props.level)}
`;
