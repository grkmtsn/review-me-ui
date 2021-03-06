import React from 'react';
import { Story, Meta } from '@storybook/react';
import Space, { SpaceProps } from './Space';
import styled from 'styled-components';

export default {
  title: 'Atoms/Space',
  component: Space,
  argTypes: {
    align: {
      control: {
        type: 'select',
        labels: {
          center: 'center',
          start: 'start',
          end: 'end',
          baseline: 'baseline',
        },
      },
      options: ['center', 'start', 'end', 'baseline'],
    },
    direction: {
      control: {
        type: 'select',
        labels: {
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
      },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: {
        type: 'select',
        labels: {
          small: 'small',
          medium: 'medium',
          large: 'large',
          xlarge: 'xlarge',
          xxlarge: 'xxlarge',
          xxxlarge: 'xxxlarge',
        },
      },
      options: ['small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge'],
    },
  },
} as Meta;

const Box = styled.div`
  width: 30px;
  height: 30px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: Story<SpaceProps> = (args) => (
  <>
    <Space {...args}>
      {new Array(20).fill(null).map((_, index) => (
        <Box key={index}>{index}</Box>
      ))}
    </Space>
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  direction: 'horizontal',
  align: 'center',
  wrap: false,
};
