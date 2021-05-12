import styled, { css } from 'styled-components';

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
  box-sizing: border-box;
  border-radius: 18px;
  width: 3.6rem;
  height: 2rem;
  display: flex;
  align-items: center;
  transition: background-color 0.4s ease;
  background-color: ${(props) => props.theme.colors.black60};
  padding: 0.2rem;
`;

export const Mark = styled.span`
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
  transition: transform 0.4s ease;
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
      transform: translateX(1.6rem);
    }
  }

  &:checked ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: none;
        background-color: ${(props) => props.theme.colors.black10};
        cursor: not-allowed;

        ${Mark} {
          background-color: ${(props) => props.theme.colors.black40};
        }
      `}
  }

  &:not(:checked) ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${(props) => props.theme.colors.black10};
        cursor: not-allowed;

        ${Mark} {
          background-color: ${(props) => props.theme.colors.black40};
        }
      `}
  }
`;
