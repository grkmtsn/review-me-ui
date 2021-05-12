import React, { InputHTMLAttributes } from 'react';
import { RegisterOptions, FieldErrors } from 'react-hook-form';

import {
  Wrapper,
  StyledInput,
  InputWrapper,
  Message,
  Label,
  LeftIcon,
} from './styles';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  allowClear?: boolean;
  disabled?: boolean;
  rules?: RegisterOptions;
  errors?: FieldErrors;
  register?: (e: string, o: RegisterOptions) => any;
  type?: 'email' | 'hidden' | 'password' | 'text';
}

export type Ref = HTMLInputElement;

const Input = ({
  name,
  label = null,
  leftIcon = null,
  allowClear = true,
  disabled = false,
  rules = {},
  errors = {},
  register,
  type = 'text',
  ...rest
}: InputProps): JSX.Element => {
  return (
    <Wrapper>
      {label && (
        <Label
          disabled={disabled}
          hasError={!!errors[name]?.message}
          htmlFor={name}
          required={!!rules.required}
        >
          {label}
        </Label>
      )}
      <InputWrapper>
        {leftIcon && <LeftIcon disabled={disabled}>{leftIcon}</LeftIcon>}
        <StyledInput
          id={name}
          name={name}
          {...(register && register(name, rules))}
          hasError={!!errors[name]?.message}
          hasLeftIcon={!!leftIcon}
          disabled={disabled}
          type={type}
          {...rest}
        />
        {!!errors[name]?.message && (
          <Message level={2}>{errors[name]?.message}</Message>
        )}
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;
