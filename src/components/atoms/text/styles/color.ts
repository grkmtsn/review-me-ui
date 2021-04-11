import { css } from 'styled-components';

const primary = css`
  color: ${(props) => props.theme.colors.primary};
`;

const black = css`
  color: ${(props) => props.theme.colors.black100};
`;

const white = css`
  color: ${(props) => props.theme.colors.white};
`;

const warning = css`
  color: ${(props) => props.theme.colors.warning};
`;

const success = css`
  color: ${(props) => props.theme.colors.success};
`;

const error = css`
  color: ${(props) => props.theme.colors.error};
`;

const color = {
  primary,
  black,
  white,
  warning,
  success,
  error,
};

export default color;
