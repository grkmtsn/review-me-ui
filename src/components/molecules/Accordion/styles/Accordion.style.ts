import styled from 'styled-components';
import { motion } from 'framer-motion';

type TriggerProps = {
  isCollapsed: boolean;
};

export const Content = styled(motion.div)`
  border-bottom: 1px solid ${(props) => props.theme.colors.black10};
  overflow: hidden;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Trigger = styled.div<TriggerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.medium}rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.black10};
  cursor: pointer;
  transition: color 0.4s ease;
  color: ${(props) =>
    props.isCollapsed ? 'inherit' : props.theme.colors.primary};

  h3 {
    color: ${(props) =>
      props.isCollapsed ? 'inherit' : props.theme.colors.primary};
    transition: color 0.4s ease;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};

    h3 {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black10};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
`;
