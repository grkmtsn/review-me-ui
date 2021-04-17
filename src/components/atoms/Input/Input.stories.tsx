import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Mail } from '@styled-icons/feather';

import Input, { InputProps } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  return (
    <div>
      <Input {...args} />
      <Input {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  leftIcon: <Mail size={20} />,
};
