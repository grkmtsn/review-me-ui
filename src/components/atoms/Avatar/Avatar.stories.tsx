import React from 'react';
import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        labels: {
          primary: 'primary',
          warning: 'warning',
          success: 'success',
          error: 'error',
        },
      },
      options: ['primary', 'warning', 'success', 'error'],
    },
    use: {
      control: {
        type: 'select',
        labels: {
          default: 'default',
          colored: 'colored',
          white: 'white',
        },
      },
      options: ['default', 'colored', 'white'],
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  use: 'colored',
};
