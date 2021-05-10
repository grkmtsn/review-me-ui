import React from 'react';
import { RegisterOptions, FieldErrors } from 'react-hook-form';

import { StyledLabel, LabelText, StyledInput, MarkBox, Mark } from './styles';

export interface CheckboxProps {
  name: string;
  text?: string;
  register?: (e: string) => any;
  disabled?: boolean;
}

const Checkbox = ({
  name,
  text = '',
  disabled = false,
  register,
  ...rest
}: CheckboxProps): JSX.Element => (
  <StyledLabel>
    {text && <LabelText>{text}</LabelText>}
    <StyledInput
      type="checkbox"
      disabled={disabled}
      {...(register && register(name))}
      {...rest}
    />
    <MarkBox>
      <Mark size={16} color="#fff" />
    </MarkBox>
  </StyledLabel>
);

export default Checkbox;
