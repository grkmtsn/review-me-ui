import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';
import { Download, UploadCloud, Calendar, Briefcase } from '@styled-icons/feather';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <div>
    <Tabs {...args}>
      <Tabs.TabItem icon={<UploadCloud size={20} strokeWidth={2} />} index={1}>
        Lorem ipsum 1
      </Tabs.TabItem>
      <Tabs.TabItem icon={<Download size={20} strokeWidth={2} />} index={2} label="Leads">
        Lorem ipsum 2
      </Tabs.TabItem>
      <Tabs.TabItem icon={<Calendar size={20} strokeWidth={2} />} index={3} label="Users">
        Lorem ipsum 3
      </Tabs.TabItem>
      <Tabs.TabItem icon={<Briefcase size={20} strokeWidth={2} />} index={4}>
        Lorem ipsum 4
      </Tabs.TabItem>
    </Tabs>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultIndex: 2,
  use: 'pane'
};
