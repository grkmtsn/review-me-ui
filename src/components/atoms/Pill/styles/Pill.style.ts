import styled, { css } from 'styled-components';

type LabelTextProps = {
  disabled?: boolean;
};

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const MarkBox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black40};
  background-color: ${(props) => props.theme.colors.black10};
  padding-block: ${(props) => props.theme.spacing.xsmall}rem;
  padding-inline: ${(props) => props.theme.spacing.medium}rem;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.black40};
    background-color: ${(props) => props.theme.colors.black40};
  }
`;

export const LabelText = styled.span<LabelTextProps>`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.small}rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;
  color: ${(props) => props.theme.colors.black100};
  transition: all 0.4s ease;

  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.colors.black40};
      cursor: not-allowed;
    `};
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${MarkBox} {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};

    ${LabelText} {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &:checked ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: 1px solid ${(props) => props.theme.colors.black10};
        background-color: ${(props) => props.theme.colors.black10};
        cursor: not-allowed;
      `}
  }

  &:not(:checked) ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: 1px solid ${(props) => props.theme.colors.black10};
        background-color: ${(props) => props.theme.colors.black10};
        cursor: not-allowed;
      `}
  }
`;
