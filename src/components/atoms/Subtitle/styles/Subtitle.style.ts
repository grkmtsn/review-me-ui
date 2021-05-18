import styled from 'styled-components';
import { setLevel } from './level';
import color from './color';

type SubTitleProps = {
  level?: 1 | 2;
  invert?: boolean;
  color?: 'primary' | 'white' | 'black' | 'success' | 'warning' | 'error';
};

export const StyledSubTitle = styled.h3<SubTitleProps>`
  color: ${(props) =>
    props.invert ? props.theme.colors.white : props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => color[props.color]}
  ${(props) => setLevel(props.level)}
`;
