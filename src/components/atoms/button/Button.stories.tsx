import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        labels: {
          text: 'text',
          outlined: 'outlined',
          contained: 'contained',
        },
      },
      options: ['text', 'outlined', 'contained'],
    },
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
    shape: {
      control: {
        type: 'select',
        labels: {
          rectangle: 'rectangle',
          circular: 'circular',
        },
      },
      options: ['rectangle', 'circular'],
    },
    fluid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me!',
};
