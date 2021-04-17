import { css } from 'styled-components';

const rectangle = css`
  padding: 0 ${(props) => props.theme.spacing.large}rem;
  height: 4.8rem;
  border-radius: 0.8rem;
`;

const circular = css`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const shape = {
  rectangle,
  circular,
};

export default shape;
