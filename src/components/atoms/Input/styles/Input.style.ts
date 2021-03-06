import styled, { css } from 'styled-components';
import Small from '../../Small';

type InputProps = {
  hasLeftIcon: boolean;
  hasError: boolean;
};

type LabelProps = {
  disabled: boolean;
  hasError: boolean;
  required: boolean;
};

type LeftIconProps = {
  disabled: boolean;
};

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  letter-spacing: 0.1px;
  font-size: ${(props) => props.theme.fontSizes.normal}rem;
  line-height: ${(props) => props.theme.spacing.large}rem;
  padding-top: ${(props) => props.theme.spacing.small}rem;
  padding-right: ${(props) => props.theme.spacing.medium}rem;
  padding-bottom: ${(props) => props.theme.spacing.small}rem;
  padding-left: ${(props) =>
    props.hasLeftIcon ? 4.4 : props.theme.spacing.medium}rem;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.black60};
  color: ${(props) => props.theme.colors.black100};
  outline: none;
  transition: border 0.3s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.black40};
  }

  &:focus {
    border: 1px solid
      ${(props) =>
        props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }

  &:focus-visible {
    border: 1px solid
      ${(props) =>
        props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.black5};
    border: 1px solid ${(props) => props.theme.colors.black10};
    user-select: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Message = styled(Small)`
  position: absolute;
  right: 0;
  bottom: -2rem;
  color: ${(props) => props.theme.colors.error};
`;

export const Label = styled.label<LabelProps>`
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-bottom: 0.6rem;
  transition: color 0.3s ease;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.2px;
  ${(props) => {
    if (props.hasError) return `color: ${props.theme.colors.error};`;
    if (props.disabled) return `color: ${props.theme.colors.black10};`;
    return `color: ${props.theme.colors.black60};`;
  }}

  ${(props) =>
    props.required &&
    css`
      &::after {
        content: '*';
        color: ${(props) => props.theme.colors.error};
        margin-left: 2px;
      }
    `}
`;

export const LeftIcon = styled.div<LeftIconProps>`
  position: absolute;
  top: 1.4rem;
  left: 1.4rem;

  svg {
    stroke: ${(props) =>
      props.disabled ? props.theme.colors.black10 : props.theme.colors.black40};
  }
`;
