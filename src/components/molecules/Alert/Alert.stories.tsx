import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Info } from '@styled-icons/feather';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'Molecules/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <div>
    <Alert {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is alert',
  message: 'Lorem Ipsum',
  description: 'This is description of message',
  icon: <Info size={16} />,
};
