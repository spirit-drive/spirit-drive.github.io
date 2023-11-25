import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { ComponentInfo } from '../ComponentInfo';

const Wrapper = () => (
  <ComponentInfo
    title="Всплывающая подсказка"
    desc={`Это компонент Tooltip. Он принимает children и добавляет в children (по возможности), обработчики onMouseEnter,
        onMouseLeave. А также в useLayoutEffect исправляет положение tooltip, если компонент выходит за пределы window`}
  >
    <div style={{ position: 'relative', height: 320, width: 320 }}>
      <Tooltip title="Красный">
        <div style={{ position: 'absolute', width: 40, height: 40, top: 20, left: 20, backgroundColor: '#f77' }} />
      </Tooltip>
      <Tooltip title="Зеленый">
        <div style={{ position: 'absolute', width: 40, height: 40, top: 20, left: 80, backgroundColor: '#7d7' }} />
      </Tooltip>
    </div>
  </ComponentInfo>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
