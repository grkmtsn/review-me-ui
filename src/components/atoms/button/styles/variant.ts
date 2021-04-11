import { css } from 'styled-components';

const text = css`
  border: none !important;
  background-color: transparent;

  &:disabled {
    color: ${(props) => props.theme.colors.black10};
    background-color: transparent !important;
  }
`;

const outlined = css`
  border: 1px solid !important;
  background-color: ${(props) => props.theme.colors.white};

  &:disabled {
    color: ${(props) => props.theme.colors.black10} !important;
    border: 1px solid ${(props) => props.theme.colors.black5} !important;
    background-color: transparent !important;
  }
`;

const contained = css`
  &:disabled {
    color: ${(props) => props.theme.colors.black10} !important;
    border: none !important;
    background-color: ${(props) => props.theme.colors.black5} !important;
  }
`;

const variant = {
  text,
  outlined,
  contained,
};

export default variant;
