import styled from 'styled-components';
import { motion } from 'framer-motion';

import variant from './variant';

type ItemProps = {
  isActive: boolean;
  disabled?: boolean;
  use?: 'initial' | 'pane';
};

type TabItemProps = {
  icon?: React.ReactNode;
  index: number;
  label?: string;
  disabled?: boolean;
  use?: 'initial' | 'pane';
};

export const Surface = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.black10};
  align-items: center;
  justify-content: flex-start;
`;

export const Item = styled.li<ItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding-inline: ${(props) => props.theme.spacing.large}rem;
  padding-block: ${(props) => props.theme.spacing.medium}rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  transition: all 0.3s ease;
  
  ${(props) => variant[props.use]}

  h3,
  div {
    transition: all 0.3s ease;
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.black10
        : props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.black80};
  }
  &:hover {
    h3,
    div {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const TabContent = styled(motion.div)<ItemProps>``;

export const IconWrapper = styled.div<ItemProps>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.black80};
`;

export const Wrapper = styled.div<TabItemProps>``;
