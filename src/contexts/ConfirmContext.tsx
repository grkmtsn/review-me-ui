import React, { useState, createContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

import Button, { ButtonProps } from '../components/atoms/Button';
import Confirm from '../components/molecules/Confirm';

export interface ConfirmProps {
  title?: string;
  description?: string;
  cancelable?: boolean;
  scrimMode?: 'dark' | 'light';
  iconType?: 'info' | 'success' | 'warning' | 'error';
  okButtonProps?: ButtonProps;
  onCancel?: () => void;
  onOk?: () => void;
}

export const ConfirmContext = createContext({
  confirm: (options?: ConfirmProps): void => {
    throw new Error('To open a confirm, wrap the app in a ConfirmProvider');
  },
});

const defaultOptions: ConfirmProps = {
  cancelable: false,
  title: 'Headline',
  okButtonProps: {
    color: 'primary',
    children: 'Ok',
  },
};

export const ConfirmProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  const confirm = (options?: ConfirmProps) => {
    setIsOpen(true);
    setOptions(options);
  };

  const close = () => {
    setIsOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      confirm: (options: ConfirmProps) => confirm(options),
    }),
    [open],
  );

  return (
    <ConfirmContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <Confirm
              onOk={options.onOk}
              onCancel={options.onCancel}
              title={options.title}
              iconType={options.iconType}
              description={options.description}
              scrimMode={options.scrimMode}
              okButtonProps={options.okButtonProps}
              cancelable={options.cancelable}
              close={close}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </ConfirmContext.Provider>
  );
};
