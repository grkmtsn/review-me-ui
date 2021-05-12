import React, { InputHTMLAttributes } from 'react';
import { StyledLabel, LabelText, StyledInput, MarkBox, Mark } from './styles';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text?: string;
  register?: (e: string) => any;
  disabled?: boolean;
}

const Switch = ({
  name,
  text = '',
  disabled,
  register,
  ...rest
}: SwitchProps): JSX.Element => (
  <StyledLabel>
    {text && <LabelText disabled={disabled}>{text}</LabelText>}
    <StyledInput
      type="checkbox"
      disabled={disabled}
      {...(register && register(name))}
      {...rest}
    />
    <MarkBox>
      <Mark />
    </MarkBox>
  </StyledLabel>
);

export default Switch;
