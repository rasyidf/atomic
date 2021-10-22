import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Button from './Button';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Design System/Atoms/Button',
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary = Template.bind({ });

Primary.args = {
  /*👇 The args you need here will depend on your component */
  primary: true,
  text: 'Primary Button',
};

export const Secondary = Template.bind({ primary: false });
Secondary.args = {
  /*👇 The args you need here will depend on your component */
  primary: false,
  text: 'Secondary Button',
};

