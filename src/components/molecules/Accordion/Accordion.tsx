import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@styled-icons/feather';

import { Wrapper, Trigger, Content } from './styles';
import { SubTitle, Space } from '../..';

export interface AccordionProps {
  defaultIndex: number;
  onItemClick: (index: number) => void;
  children: React.ReactNode | React.ReactNode[];
}

export interface AccordionItemProps {
  label: string;
  icon?: React.ReactNode;
  isCollapsed?: boolean;
  handleClick?: () => void;
  index: number;
  children: React.ReactNode;
}

const Accordion = ({
  defaultIndex,
  onItemClick,
  children,
}: AccordionProps): JSX.Element => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  const changeItem = (itemIndex: number) => {
    if (typeof onItemClick === 'function') onItemClick(itemIndex);
    if (itemIndex !== bindIndex) {
      setBindIndex(itemIndex);
    } else {
      setBindIndex(-1);
    }
  };

  const items = React.Children.map(children, (child: any) =>
    child.type.name === 'Item' ? child : null,
  );

  return (
    <Wrapper>
      {items.map(({ props }) => (
        <Item
          icon={props.icon}
          key={`accordion-item-${props.index}`}
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          index={props.index}
          children={props.children}
        />
      ))}
    </Wrapper>
  );
};

const Item = ({
  icon,
  label,
  isCollapsed,
  handleClick,
  children,
}: AccordionItemProps) => {
  return (
    <>
      <Trigger isCollapsed={isCollapsed} role="button" onClick={handleClick}>
        <Space>
          {icon}
          <SubTitle level={2}>{label}</SubTitle>
        </Space>
        {isCollapsed ? <Plus size={16} /> : <Minus size={16} />}
      </Trigger>
      <AnimatePresence>
        {!isCollapsed && (
          <Content
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </Content>
        )}
      </AnimatePresence>
    </>
  );
};

Accordion.Item = Item;

export default Accordion;
