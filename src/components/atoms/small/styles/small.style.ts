import styled from 'styled-components';
import { setLevel } from './level';

type SmallProps = {
  level?: 1 | 2 | 3;
};

export const StyledSmall = styled.p<SmallProps>`
  color: ${(props) => props.theme.colors.black100};
  font-style: normal;
  margin: 0;

  ${(props) => setLevel(props.level)}
`;
