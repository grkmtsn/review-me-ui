import React from 'react';
import { Story, Meta } from '@storybook/react';
import Confirm, { ConfirmProps } from './Confirm';

export default {
  title: 'Molecules/Confirm',
  component: Confirm,
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Heading',
  description: 'Lorem ipsum dolor sit amed',
  okButtonProps: {
      children: 'Confirm'
  }
};
