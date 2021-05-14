import styled, { css, keyframes } from 'styled-components';
import { X } from '@styled-icons/feather';
import { SubTitle, Text } from '../../..';

type AlertProps = {
  closed: boolean;
  type: 'primary' | 'success' | 'error' | 'warning' | 'white';
};

type BackgroundOverlayProps = {
  type: 'primary' | 'success' | 'error' | 'warning' | 'white';
};

type IconProps = {
  type: 'primary' | 'success' | 'error' | 'warning' | 'white';
};

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: flex-start;
  padding-inline: ${(props) => props.theme.spacing.medium}rem;
  padding-block: ${(props) => props.theme.spacing.xsmall}rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors[props.type]};
  border-radius: 8px;
  overflow: hidden;
  transform-origin: top;
  transition: all 0.4s ease;
  transform: scaleY(1);
  opacity: 1;

  ${(props) =>
    props.closed &&
    css`
      transform: scaleY(0);
      opacity: 0;
    `}
`;

export const BackgroundOverlay = styled.div<BackgroundOverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors[props.type]};
  opacity: 0.04;
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding-right: ${(props) => props.theme.spacing.small}rem;
`;

export const StyledIconWrapper = styled.div<IconProps>`
  margin-right: ${(props) => props.theme.spacing.small}rem;
  color: ${(props) => props.theme.colors[props.type]};
`;

export const StyledMessage = styled(SubTitle)`
  margin-bottom: ${(props) => props.theme.spacing.xsmall}rem;
`;

export const StyledDescription = styled(Text)``;

export const StyledCloseIcon = styled(X)`
  cursor: pointer;
`;
