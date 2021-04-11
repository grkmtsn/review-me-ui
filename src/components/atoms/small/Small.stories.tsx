import React from 'react';
import { Story, Meta } from '@storybook/react';
import Small, { SmallProps } from './Small';

export default {
  title: 'Atoms/Small',
  component: Small,
  argTypes: {
    level: {
      control: {
        type: 'select',
        labels: {
          1: '1',
          2: '2',
          3: '3',
        },
      },
      options: [1, 2, 3],
    },
  },
} as Meta;

const Template: Story<SmallProps> = (args) => <Small {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: 'Lorem Ipsum Dolor',
};
