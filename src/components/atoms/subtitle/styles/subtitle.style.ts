import styled from 'styled-components';
import { setLevel } from './level';

type SubTitleProps = {
  level?: 1 | 2;
  invert?: boolean;
};

export const StyledSubTitle = styled.h3<SubTitleProps>`
  color: ${(props) =>
    props.invert ? props.theme.colors.white : props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => setLevel(props.level)}
`;
