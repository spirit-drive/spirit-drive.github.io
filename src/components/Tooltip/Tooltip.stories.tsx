import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    opened: true,
    title: 'Подсказка',
    children: (
      <div>
        Это компонент Tooltip. Он принимает children и добавляет в children (по возможности), обработчики onMouseEnter,
        onMouseLeave. А также в useLayoutEffect исправляет положение tooltip, если компонент выходит за пределы window
      </div>
    ),
  },
};
