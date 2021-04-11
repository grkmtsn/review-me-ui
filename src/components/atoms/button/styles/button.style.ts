import styled from 'styled-components';

type ButtonProps = {
  color: 'primary' | 'secondary' | 'warning' | 'positive' | 'negative';
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
  white-space: nowrap;
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  padding: 0 ${(props) => props.theme.spacing.large}rem;
  height: 4.8rem;
`;
