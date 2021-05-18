import React from 'react';
import { Info, CheckCircle, XCircle } from '@styled-icons/feather';

import { Heading, Space, Text } from '../..';
import { theme } from '../../../theme/theme';

import { Card, Overlay, IconWrapper, Header, Footer } from './styles';
import Button, { ButtonProps } from '../../atoms/Button';

export interface ConfirmProps {
  title?: string;
  iconType?: 'info' | 'success' | 'warning' | 'error';
  description?: string;
  scrimMode?: 'dark' | 'light';
  cancelable?: boolean;
  okButtonProps?: ButtonProps;
  onCancel: () => void;
  onOk: () => void;
  close: () => void;
}

type IconTypes = 'info' | 'success' | 'warning' | 'error';

const renderIcon = (iconType: IconTypes) => {
  switch (iconType) {
    case 'info':
      return <Info size={20} strokeWidth={2} color={theme.colors.primary} />;
    case 'error':
      return <XCircle size={20} strokeWidth={2} color={theme.colors.error} />;
    case 'warning':
      return <Info size={20} strokeWidth={2} color={theme.colors.warning} />;
    case 'success':
      return (
        <CheckCircle size={20} strokeWidth={2} color={theme.colors.success} />
      );
    default:
      break;
  }
};

const Confirm = ({
  iconType,
  title,
  description,
  scrimMode = 'light',
  cancelable,
  okButtonProps,
  onCancel,
  onOk,
  close,
}: ConfirmProps): JSX.Element => {
  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const cardVariant = {
    initial: { transform: 'translateY(-2%)' },
    isOpen: { transform: 'translateY(0%)' },
    exit: { transform: 'translateY(-2%)' },
  };
  const handleOk = () => {
    if (onOk) onOk();
    close();
  };
  const handleCancel = () => {
    if (onCancel) onCancel();
    close();
  };
  return (
    <Overlay
      scrimMode={scrimMode}
      initial={'initial'}
      animate={'isOpen'}
      exit={'exit'}
      variants={modalVariant}
    >
      <Card variants={cardVariant}>
        <Header>
          {iconType && <IconWrapper>{renderIcon(iconType)}</IconWrapper>}
          <Heading as="h5">{title}</Heading>
        </Header>
        <Text level={2}>{description}</Text>
        <Footer>
          <Space>
            {cancelable && (
              <Button color="error" variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            )}
            <Button onClick={handleOk} {...okButtonProps} />
          </Space>
        </Footer>
      </Card>
    </Overlay>
  );
};

export default Confirm;
