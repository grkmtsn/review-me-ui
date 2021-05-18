import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { BASE_CONF } from '../../../../utils/gridConfig';
import hexToRgb from '../../../../utils/hexToRgb';

type OverlayProps = {
  scrimMode: 'light' | 'dark';
};

const scrimModeOpacity = {
  light: 0.4,
  dark: 0.7,
};

export const Overlay = styled(motion.div)<OverlayProps>`
  position: fixed;
  z-index: 90;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(
    ${(props) =>
      hexToRgb(props.theme.colors.black100, scrimModeOpacity[props.scrimMode])}
  );
`;

export const Card = styled(motion.div)`
  transition: transform 0.1s ease;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.modal};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing.large}rem;
  width: 90%;

  @media (min-width: ${BASE_CONF.breakpoints.sm}rem) {
    width: 40rem;
  }
`;

export const IconWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing.small}rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.small}rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.spacing.xlarge}rem;
`;
