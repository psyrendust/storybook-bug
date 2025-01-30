import { fn } from '@storybook/test';

import { Button } from '../../Button';

export default {
  title: 'Data/Card',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },

  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
