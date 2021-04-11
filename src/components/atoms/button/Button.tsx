import React from 'react';
import { Loader } from '@styled-icons/feather';

import { StyledButton, StyledButtonLoader } from './styles';

export interface ButtonProps {
  color?: 'primary' | 'warning' | 'success' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  shape?: 'rectangle' | 'circular';
  fluid?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean;
  loading: boolean;
  children: React.ReactNode;
}

const Button = ({
  color = 'primary',
  variant = 'contained',
  shape = 'rectangle',
  type = 'button',
  fluid = false,
  disabled = false,
  loading = false,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <div>
      <StyledButton
        color={color}
        variant={variant}
        shape={shape}
        type={type}
        fluid={fluid}
        disabled={disabled}
        loading={loading}
        {...rest}
      >
        {loading && <StyledButtonLoader size={20} shape={shape} />}
        <span>{children}</span>
      </StyledButton>
    </div>
  );
};

export default Button;
