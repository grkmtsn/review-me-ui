import React, { forwardRef, useState, useRef } from 'react';
import useCombinedRefs from '../../../hooks/useCombinedRefs';
import {
  Wrapper,
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
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(
  (
    {
      label = null,
      message = null,
      leftIcon = null,
      allowClear = true,
      disabled = false,
      onChange,
      onBlur,
      onFocus,
      onClear,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const innerRef = useRef<HTMLInputElement>(null);
    const combinedRef = useCombinedRefs(ref, innerRef);

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleFocus = (e: React.FormEvent<HTMLInputElement>): void => {
      if (onFocus) onFocus(e);
      setFocused(true);
      if (combinedRef.current.value.length > 0) {
        setTouched(true);
      }
    };

    const handleBlur = (e: React.FormEvent<HTMLInputElement>): void => {
      if (onBlur) onBlur(e);
      setFocused(false);
    };

    const handleClear = () => {
      if (onClear) onClear();
      combinedRef.current.value = '';
      combinedRef.current.focus();
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
      <Wrapper>
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
          {leftIcon && <LeftIcon disabled={disabled}>{leftIcon}</LeftIcon>}
          <StyledInput
            ref={combinedRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            hasError={!!message}
            hasLeftIcon={!!leftIcon}
            allowClear={allowClear}
            disabled={disabled}
            placeholder="Placeholder"
            {...rest}
          />
          {message && <Message level={2}>{message}</Message>}
          {allowClear && touched && (
            <ClearIcon size={20} onClick={handleClear} />
          )}
        </InputWrapper>
      </Wrapper>
    );
  },
);

export default Input;
