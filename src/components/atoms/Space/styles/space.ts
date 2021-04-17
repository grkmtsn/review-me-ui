import { css } from 'styled-components';

type Direction = 'vertical' | 'horizontal';
type Size =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'
  | number;

export const setSpaceAndDirection = (direction: Direction, size: Size): any => {
  switch (direction) {
    case 'horizontal':
      return css`
        flex-direction: row;
        > *:not(:last-child) {
          margin-right: ${(props) =>
            typeof size === 'string' ? props.theme.spacing[size] : size}rem;
        }
      `;
    case 'vertical':
      return css`
        flex-direction: column;
        > *:not(:last-child) {
          margin-bottom: ${(props) =>
            typeof size === 'string' ? props.theme.spacing[size] : size}rem;
        }
      `;
  }
};
