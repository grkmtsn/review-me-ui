import styled, { keyframes, css } from 'styled-components';
import { Loader } from '@styled-icons/feather';

import setColor from './color';
import shape from './shape';
import variant from './variant';

type ButtonProps = {
  color: 'primary' | 'warning' | 'success' | 'error';
  variant: 'text' | 'outlined' | 'contained';
  shape: 'rectangle' | 'circular';
  fluid: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  loading: boolean;
};

type LoaderProps = {
  shape: 'rectangle' | 'circular';
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.loading ? 'none' : 'all')};
  overflow: hidden;
  appearance: none;
  outline: none;
  white-space: nowrap;
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  transition: all 0.3s ease;
  font-size: 1.4rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.8rem;
  letter-spacing: 0.2px;

  ${(props) => shape[props.shape]}
  ${(props) => variant[props.variant]}

  ${(props) => setColor(props.color, props.variant)}

  > span {
    ${props => props.loading && css`
      opacity: 0;
    `}
  }
`;

export const StyledButtonLoader = styled(Loader)<LoaderProps>`
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  margin-inline-end: 0px;
`;
