import React from 'react';

import {
  StyledButton,
  StyledButtonLoader,
  LeftIcon,
  RightIcon,
} from './styles';

export interface ButtonProps {
  color?: 'primary' | 'warning' | 'success' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  shape?: 'rectangle' | 'circular';
  fluid?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean;
  loading: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
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
  leftIcon = null,
  rightIcon = null,
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
        {leftIcon && shape !== 'circular' && <LeftIcon>{leftIcon}</LeftIcon>}
        {loading && <StyledButtonLoader size={20} />}
        <span>{children}</span>
        {rightIcon && shape !== 'circular' && <RightIcon>{rightIcon}</RightIcon>}
      </StyledButton>
    </div>
  );
};

export default Button;
