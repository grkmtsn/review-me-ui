import React, { useState } from 'react';
import { useLayer, Arrow } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from '@styled-icons/feather';
import isReactText from '../../../utils/isReactText';
import { useDisclosure } from '../../../hooks';
import { Wrapper, Footer } from './styles';
import { Button, Space, SubTitle } from '../..';
import { theme } from '../../../theme/theme';

export interface PopConfirmProps {
  text: string;
  onOk: () => void;
  onCancel?: () => void;
  children: any;
}

const PopConfirm = ({
  text,
  onOk,
  onCancel,
  children,
}: PopConfirmProps): JSX.Element => {
  let trigger: React.ReactNode;
  const { isOpen, close, open } = useDisclosure();
  const handleOkConfirm = () => {
    if (onOk) onOk();
    close();
  };
  const handleCancelConfirm = () => {
    if (onCancel) onCancel();
    close();
  };
  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: close,
    onDisappear: close,
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: 'top-center', // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  });
  if (isReactText(children)) {
    trigger = (
      <span className="tooltip-text-wrapper" {...triggerProps} onClick={open}>
        {children}
      </span>
    );
  } else {
    trigger = React.cloneElement(children, {
      ...triggerProps,
      onClick: () => {
        open();
      },
    });
  }
  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="tooltip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              <Wrapper>
                <Space>
                  <AlertCircle
                    size={14}
                    color={theme.colors.warning}
                    strokeWidth={2}
                  />
                  <SubTitle level={2}>{text}</SubTitle>
                </Space>
                <Footer>
                  <Space>
                    <Button
                      color="error"
                      variant="outlined"
                      compact
                      onClick={handleCancelConfirm}
                    >
                      No
                    </Button>
                    <Button color="primary" compact onClick={handleOkConfirm}>
                      Yes
                    </Button>
                  </Space>
                </Footer>
              </Wrapper>
              <Arrow {...arrowProps} />
            </motion.div>
          )}
        </AnimatePresence>,
      )}
    </>
  );
};

export default PopConfirm;
