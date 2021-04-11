import styled from 'styled-components';
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
};

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
`;
