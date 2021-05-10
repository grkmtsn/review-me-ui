import styled from 'styled-components';
import { setLevel } from './level';

type SubtitleProps = {
  level?: 1 | 2;
  invert?: boolean;
};

export const StyledSubtitle = styled.h3<SubtitleProps>`
  color: ${(props) =>
    props.invert ? props.theme.colors.white : props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => setLevel(props.level)}
`;
