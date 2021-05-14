import React from 'react';
import { Story, Meta } from '@storybook/react';
import SubTitle, { SubTitleProps } from './SubTitle';

export default {
  title: 'Atoms/SubTitle',
  component: SubTitle,
  argTypes: {
    level: {
      control: {
        type: 'select',
        labels: {
          1: '1',
          2: '2',
        },
      },
      options: [1, 2],
    },
    color: {
      control: {
        type: 'select',
        labels: {
          primary: 'primary',
          black: 'black',
          success: 'success',
          warning: 'warning',
          error: 'error',
        },
      },
      options: ['primary', 'black', 'success', 'warning', 'error'],
    },
  },
} as Meta;

const Template: Story<SubTitleProps> = (args) => <SubTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  color: 'black',
  children: 'Lorem Ipsum Dolor',
};
