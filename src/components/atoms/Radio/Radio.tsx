import React, { InputHTMLAttributes } from 'react';
import { StyledLabel, LabelText, StyledInput, MarkBox, Mark } from './styles';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text?: string;
  register?: (e: string) => any;
  disabled?: boolean;
}

const Radio = ({
  name,
  text = '',
  disabled = false,
  register,
  ...rest
}: RadioProps): JSX.Element => (
  <StyledLabel>
    {text && <LabelText disabled={disabled}>{text}</LabelText>}
    <StyledInput
      type="radio"
      disabled={disabled}
      name={name}
      {...(register && register(name))}
      {...rest}
    />
    <MarkBox>
      <Mark />
    </MarkBox>
  </StyledLabel>
);

export default Radio;
