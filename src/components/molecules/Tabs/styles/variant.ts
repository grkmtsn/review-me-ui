import { css } from 'styled-components';

type ItemProps = {
  isActive: boolean;
  disabled: boolean;
};

const initial = css<ItemProps>`
  border-bottom: 2px solid
    ${(props) => (props.isActive ? props.theme.colors.primary : 'transparent')};
`;

const pane = css<ItemProps>`
  margin-right: ${(props) => (props.theme.spacing.small)}rem;
  background-color: ${(props) => (props.isActive ? props.theme.colors.white : props.theme.colors.black5)};
  border: 1px solid ${(props) => props.disabled ? props.theme.colors.white : props.theme.colors.black10};
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  
  &:after {
    content: ' ';
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.isActive ? props.theme.colors.white : props.theme.colors.black10)};
    position: absolute;
    bottom: -1px;
    left: 0;
  }
`;

const variant = {
  initial,
  pane,
};

export default variant;