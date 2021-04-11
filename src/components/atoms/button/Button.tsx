import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'warning' | 'positive' | 'negative';
  variant?: 'text' | 'outlined' | 'contained';
  shape?: 'rectangle' | 'circular';
  fluid?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean;
  children: React.ReactNode;
}

const Button = ({
  color = 'primary',
  variant = 'contained',
  shape = 'rectangle',
  type = 'button',
  fluid = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      color={color}
      variant={variant}
      shape={shape}
      type={type}
      fluid={fluid}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
