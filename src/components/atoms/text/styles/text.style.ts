import styled from 'styled-components';
import { setLevel } from './level';

type TextProps = {
  level?: 1 | 2;
};

export const StyledText = styled.p<TextProps>`
  color: ${(props) => props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => setLevel(props.level)}
`;
