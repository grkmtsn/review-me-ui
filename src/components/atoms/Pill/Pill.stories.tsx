import React from 'react';
import { Story, Meta } from '@storybook/react';
import Pill, { PillProps } from './Pill';

export default {
  title: 'Atoms/Pill',
  component: Pill,
} as Meta;

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  disabled: false,
};
