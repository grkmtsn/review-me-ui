import React, { InputHTMLAttributes } from 'react';

import { StyledLabel, LabelText, StyledInput, MarkBox, Mark } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
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
    {text && <LabelText disabled={disabled}>{text}</LabelText>}
    <StyledInput
      type="checkbox"
      disabled={disabled}
      {...(register && register(name))}
      {...rest}
    />
    <MarkBox>
      <Mark strokeWidth={2} size={16} color="#fff" />
    </MarkBox>
  </StyledLabel>
);

export default Checkbox;
