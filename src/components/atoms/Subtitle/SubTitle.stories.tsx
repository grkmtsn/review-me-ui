import React from 'react';
import { Story, Meta } from '@storybook/react';
import Subtitle, { SubtitleProps } from './Subtitle';

export default {
  title: 'Atoms/SubTitle',
  component: Subtitle,
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
  },
} as Meta;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: 'Lorem Ipsum Dolor',
};
