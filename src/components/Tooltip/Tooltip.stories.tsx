import { Meta } from '@storybook/react';
import React from 'react';

import { ComponentInfo } from '../ComponentInfo';

import { Tooltip } from './Tooltip';
import { TooltipProps } from './contract';

const placements = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

const Wrapper = (props: TooltipProps) => (
  <ComponentInfo title="Tooltip">
    <Tooltip {...props}>Lorem ipsum</Tooltip>
  </ComponentInfo>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Wrapper,
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  argTypes: {
    children: {
      control: false,
    },
    placement: {
      control: 'select',
      options: placements,
      table: {
        type: { summary: placements.join(' | ') },
        defaultValue: { summary: 'right' },
      },
    },
    visible: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
export const Default = {};
