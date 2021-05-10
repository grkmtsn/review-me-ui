import styled, { css } from 'styled-components';
import { Check } from '@styled-icons/feather';

type LabelTextProps = {
  disabled?: boolean;
};

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const LabelText = styled.span<LabelTextProps>`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.small}rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;
  color: ${(props) => props.theme.colors.black100};
  margin-left: ${(props) => props.theme.spacing.small}rem;

  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.colors.black40};
      cursor: not-allowed;
    `};
`;

export const MarkBox = styled.div`
  border: 2px solid ${(props) => props.theme.colors.black60};
  box-sizing: border-box;
  border-radius: 4px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s ease;
`;

export const Mark = styled(Check)`
  display: none;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${MarkBox} {
    border: none;
    background-color: ${(props) => props.theme.colors.primary};

    ${Mark} {
      display: block;
    }
  }

  &:checked ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: none;
        background-color: ${(props) => props.theme.colors.black40};

        ${Mark} {
          display: block;
        }
      `}
  }

  &:not(:checked) ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${(props) => props.theme.colors.black10};
        cursor: not-allowed;
      `}
  }
`;
