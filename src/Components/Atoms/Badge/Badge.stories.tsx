import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Badge from './Badge';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Design System/Atoms/Badge',
  component: Badge,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Badge>> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { 
  text: 'Hey',
};

