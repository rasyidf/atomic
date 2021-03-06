import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Button from './Button';

//π This default export determines where your story goes in the story list
export default {
  title: 'Design System/Atoms/Button',
  component: Button,
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Primary = Template.bind({ });

Primary.args = {
  /*π The args you need here will depend on your component */
  primary: true,
  text: 'Primary Button',
};

export const Secondary = Template.bind({ primary: false });
Secondary.args = {
  /*π The args you need here will depend on your component */
  primary: false,
  text: 'Secondary Button',
};

