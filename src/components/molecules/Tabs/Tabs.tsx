import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { SubTitle, Space } from '../..';

import { Surface, Item as TabItem, TabContent, IconWrapper, Wrapper } from './styles';

export interface TabsProps {
  defaultIndex?: number;
  onTabClick?: (index: number) => {};
  use?: 'initial' | 'pane';
  children: React.ReactNode[] | React.ReactNode;
}

export interface TabItemProps {
  icon?: React.ReactNode;
  index: number;
  label?: string;
  disabled?: boolean;
  use?: 'initial' | 'pane';
  children: React.ReactNode;
}

const variants = {
  active: {
    display: 'block',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    display: 'none',
    opacity: 0,
    y: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Tabs = ({
  defaultIndex,
  onTabClick,
  use = 'initial',
  children,
}: TabsProps): JSX.Element => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  const changeTab = (newIndex: number) => {
    if (bindIndex !== newIndex) {
      if (typeof onTabClick === 'function') onTabClick(newIndex);
      setBindIndex(newIndex);
    }
  };

  const items = React.Children.map(children, (child: any) =>
    child.type.displayName === 'Item' ? child : null,
  );

  return (
    <div>
      <Surface>
        {items
          .filter(Boolean)
          .map(({ props: { index, label, icon, disabled } }) => (
            <TabItem
              isActive={bindIndex === index}
              key={`tab-btn-${index}`}
              onClick={() => changeTab(index)}
              disabled={disabled}
              use={use}
            >
              {label ? (
                <Space>
                  {icon && (
                    <IconWrapper isActive={bindIndex == index}>
                      {icon}
                    </IconWrapper>
                  )}
                  <SubTitle
                    level={2}
                    color={bindIndex == index ? 'primary' : 'black'}
                  >
                    {label}
                  </SubTitle>
                </Space>
              ) : (
                <IconWrapper isActive={bindIndex == index}>{icon}</IconWrapper>
              )}
            </TabItem>
          ))}
      </Surface>
      <AnimatePresence>
        {items.map(({ props }) => (
          <TabContent
            {...props}
            isActive={bindIndex === props.index}
            key={`tab-content-${props.index}`}
            initial="inactive"
            animate={bindIndex === props.index ? 'active' : 'inactive'}
            transition={{ duration: 0.3 }}
            variants={variants}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Item = ({ icon, label, index, disabled, use }: TabItemProps) => {
  return (
    <Wrapper
      icon={icon}
      label={label}
      index={index}
      disabled={disabled}
      use={use}
    />
  );
};

Tabs.Item = Item;

export default Tabs;
