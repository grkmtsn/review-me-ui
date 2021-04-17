import styled, { css } from 'styled-components';
import { setAlign } from './align';
import { setSpaceAndDirection } from './space';

type SpaceProps = {
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge'
    | number;
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction?: 'horizontal' | 'vertical';
  wrap?: number;
};

export const StyledSpace = styled.div<SpaceProps>`
  display: inline-flex;
  ${(props) => setAlign(props.align)}
  ${(props) => setSpaceAndDirection(props.direction, props.size)}

  ${(props) =>
    props.wrap &&
    props.direction === 'horizontal' &&
    css`
      flex-wrap: wrap;
      margin-bottom: -${(props) => props.theme.spacing.medium}rem;

      > * {
        margin-bottom: ${(props) => props.theme.spacing.medium}rem;
      }
    `}
`;
