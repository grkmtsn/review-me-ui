import React, { ButtonHTMLAttributes, forwardRef, RefObject } from 'react';

import {
  StyledButton,
  StyledButtonLoader,
  LeftIcon,
  RightIcon,
} from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'warning' | 'success' | 'error';
  variant?: 'text' | 'outlined' | 'contained';
  shape?: 'rectangle' | 'circular';
  compact?: boolean;
  fluid?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  children: React.ReactNode;
}

const Button = (
  {
    color = 'primary',
    variant = 'contained',
    shape = 'rectangle',
    compact = false,
    type = 'button',
    fluid = false,
    disabled = false,
    loading = false,
    leftIcon = null,
    rightIcon = null,
    children,
    ...rest
  }: ButtonProps,
  ref: RefObject<HTMLButtonElement>,
): JSX.Element => {
  return (
    <div>
      <StyledButton
        ref={ref}
        color={color}
        variant={variant}
        shape={shape}
        type={type}
        fluid={fluid}
        disabled={disabled}
        loading={loading ? 1 : 0}
        compact={compact}
        {...rest}
      >
        {leftIcon && shape !== 'circular' && !compact && (
          <LeftIcon>{leftIcon}</LeftIcon>
        )}
        {loading && !compact && <StyledButtonLoader size={20} />}
        <span>{children}</span>
        {rightIcon && shape !== 'circular' && !compact && (
          <RightIcon>{rightIcon}</RightIcon>
        )}
      </StyledButton>
    </div>
  );
};

export default forwardRef(Button);
