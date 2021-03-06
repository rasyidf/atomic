import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import Alerts from './Alerts';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Design System/Atoms/Alerts',
  component: Alerts,
} as Meta;

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof Alerts>> = (args) => <Alerts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  /*๐ The args you need here will depend on your component */
  title: 'Info',
  description: 'This is a description',
  show:true,
  showClose:true,
};

// Alerts
// Badge
// Buttons
// Dropdowns
// Images
// Inputs
// Menus
// Modals
// Navbars
// Pagination
// Popovers
// Progressbars
// Tabs
// Tooltips
