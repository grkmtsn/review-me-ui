import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Info, AlertCircle, CheckCircle } from '@styled-icons/feather';
import {
  StyledAlert,
  StyledIconWrapper,
  StyledMessage,
  StyledDescription,
  StyledCloseIcon,
  ContentWrapper,
  BackgroundOverlay,
} from './styles';

export interface AlertProps {
  type: 'primary' | 'success' | 'error' | 'warning';
  icon?: React.ReactNode;
  description?: string;
  message: string;
  closable: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Alert = ({
  type = 'primary',
  icon,
  message,
  description,
  closable = false,
  onClose,
}: AlertProps): JSX.Element => {
  const [closed, setClosed] = useState(false);
  const handleClose = () => {
    if (onClose) onClose();
    setClosed(true);
  };
  const renderIcon = () => {
    switch (type) {
      case 'primary':
        return <Info size={16} strokeWidth={2} />;
      case 'error':
        return <AlertCircle size={16} strokeWidth={2} />;
      case 'warning':
        return <AlertCircle size={16} strokeWidth={2} />;
      case 'success':
        return <CheckCircle size={16} strokeWidth={2} />;
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {!closed && (
        <StyledAlert type={type} exit={{ opacity: 0 }}>
          <BackgroundOverlay type={type} />
          {!!icon && (
            <StyledIconWrapper type={type}>{renderIcon()}</StyledIconWrapper>
          )}
          <ContentWrapper>
            <StyledMessage color={type} level={2}>
              {message}
            </StyledMessage>
            {!!description && (
              <StyledDescription color={type} level={2}>
                {description}
              </StyledDescription>
            )}
          </ContentWrapper>
          {closable && <StyledCloseIcon size={20} onClick={handleClose} />}
        </StyledAlert>
      )}
    </AnimatePresence>
  );
};

export default Alert;
