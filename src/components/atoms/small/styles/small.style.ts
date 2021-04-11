import styled from 'styled-components';
import color from './color';
import { setLevel } from './level';

type SmallProps = {
  level?: 1 | 2 | 3;
  color?: 'primary' | 'black' | 'success' | 'warning' | 'error';
};

export const StyledSmall = styled.p<SmallProps>`
  color: ${(props) => props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => color[props.color]}
  ${(props) => setLevel(props.level)}
`;
