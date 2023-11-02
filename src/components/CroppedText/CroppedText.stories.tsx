import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CroppedText } from './CroppedText';

const meta: Meta<typeof CroppedText> = {
  title: 'CroppedText',
  component: CroppedText,
  argTypes: {
    rows: { control: { type: 'number', min: 0 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    opened: false,
    rows: 1,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.`,
  },
};
