import React, { useState, useRef } from 'react';
import {
  StyledInput,
  InputWrapper,
  Message,
  Label,
  LeftIcon,
  ClearIcon,
} from './styles';

export interface InputProps {
  label?: string;
  required?: boolean;
  message?: string;
  leftIcon?: React.ReactNode;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  label = null,
  message = null,
  leftIcon = null,
  allowClear = false,
  disabled = false,
  onChange,
  ...rest
}: InputProps): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  const handleFocus = (): void => {
    setFocused(true);
  };

  const handleBlur = (): void => {
    setFocused(false);
  };

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
    setTouched(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    if (e.currentTarget.value.length > 0) {
      setTouched(true);
    } else {
      setTouched(false);
    }
  };

  return (
    <>
      {label && (
        <Label
          disabled={disabled}
          hasError={!!message && touched}
          level={1}
          focused={focused}
        >
          {label}
        </Label>
      )}
      <InputWrapper>
        <LeftIcon disabled={disabled}>{leftIcon}</LeftIcon>
        <StyledInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          hasError={!!message && touched}
          hasLeftIcon={!!leftIcon}
          allowClear={allowClear}
          disabled={disabled}
          placeholder="Placeholder"
          ref={inputRef}
          {...rest}
        />
        {message && touched && <Message level={2}>{message}</Message>}
        {touched && allowClear && <ClearIcon size={20} onClick={handleClear} />}
      </InputWrapper>
    </>
  );
};

export default Input;
