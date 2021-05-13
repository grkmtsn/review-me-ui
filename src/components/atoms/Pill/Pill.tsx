import React, { InputHTMLAttributes } from 'react';
import { StyledLabel, LabelText, StyledInput, MarkBox } from './styles';

export interface PillProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  register?: (e: string) => any;
}

const Pill = ({
  name,
  disabled,
  text,
  register,
  ...rest
}: PillProps): JSX.Element => (
  <StyledLabel>
    <StyledInput
      type="checkbox"
      disabled={disabled}
      {...(register && register(name))}
      {...rest}
    />
    <MarkBox>
      <LabelText disabled={disabled}>{text}</LabelText>
    </MarkBox>
  </StyledLabel>
);

export default Pill;
