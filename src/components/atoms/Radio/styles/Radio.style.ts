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
  border: 2px solid ${(props) => props.theme.colors.black60};
  background: transparent;
  box-sizing: border-box;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.4s ease;
`;

export const Mark = styled.span`
  opacity: 0;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  transition: opacity 0.4s ease;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${MarkBox} {
    border: 2px solid ${(props) => props.theme.colors.primary};

    ${Mark} {
      opacity: 1;
    }
  }

  &:checked ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: 2px solid ${(props) => props.theme.colors.black40};
        cursor: not-allowed;
        
        ${Mark} {
          display: block;
          background-color: ${(props) => props.theme.colors.black40};
        }
      `}
  }

  &:not(:checked) ~ ${MarkBox} {
    ${(props) =>
      props.disabled &&
      css`
        border: 2px solid ${(props) => props.theme.colors.black40};
        cursor: not-allowed;
      `}
  }
`;
