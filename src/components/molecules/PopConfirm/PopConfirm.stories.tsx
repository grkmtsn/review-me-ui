import React from 'react';
import { Story, Meta } from '@storybook/react';
import PopConfirm, { PopConfirmProps } from './PopConfirm';
import { Button } from '../..';

export default {
  title: 'Molecules/PopConfirm',
  component: PopConfirm,
} as Meta;

const Template: Story<PopConfirmProps> = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <PopConfirm {...args}>
      <Button>Click</Button>
    </PopConfirm>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Are you sure?',
  onOk: () => {
    console.log('I am OK');
  },
};
