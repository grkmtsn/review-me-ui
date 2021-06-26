import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Airplay, Anchor, Bluetooth, Camera } from '@styled-icons/feather';
import Accordion, { AccordionProps } from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
} as Meta;

const wrapperStyles = {
  padding: 16,
  height: 300,
};

const Template: Story<AccordionProps> = (args) => (
  <div>
    <Accordion {...args}>
      <Accordion.Item icon={<Airplay size={18} />} index={1} label="Item 1">
        <div style={wrapperStyles}>Test</div>
      </Accordion.Item>
      <Accordion.Item icon={<Anchor size={18} />} index={2} label="Item 2">
        <div style={wrapperStyles}>Test</div>
      </Accordion.Item>
      <Accordion.Item icon={<Bluetooth size={18} />} index={3} label="Item 3">
        <div style={wrapperStyles}>Test</div>
      </Accordion.Item>
      <Accordion.Item icon={<Camera size={18} />} index={4} label="Item 4">
        <div style={wrapperStyles}>Test</div>
      </Accordion.Item>
    </Accordion>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultIndex: 1,
  onItemClick: (item: number) => {
    console.log(item);
  },
};
