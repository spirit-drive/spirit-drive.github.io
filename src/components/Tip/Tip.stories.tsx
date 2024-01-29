import type { Meta, StoryObj } from '@storybook/react';

import { Tip } from './Tip';
import { ComponentInfo } from '../ComponentInfo';
import React from 'react';

const Wrapper = () => (
  <ComponentInfo title="Tip" desc={`Компонент использует useLayoutEffect и onTransitionEnd.`}>
    <div style={{ position: 'relative', width: 400, height: 1200, overflow: 'hidden' }}>
      <Tip title="ttile1">
        <div style={{ height: 40, top: 60, left: 10, backgroundColor: '#efc' }}>test</div>
      </Tip>
      <Tip title="ttile1">
        <span style={{ position: 'absolute', width: 40, height: 40, top: 60, left: 10, backgroundColor: '#efc' }}>
          test
        </span>
        {/*<div></div>*/}
      </Tip>
      <Tip title="ttile1">
        <div style={{ position: 'absolute', width: 40, height: 40, top: 60, left: 80, backgroundColor: '#efc' }}></div>
      </Tip>
      <Tip title="ttile1">
        <div style={{ position: 'absolute', width: 40, height: 40, top: 60, left: 160, backgroundColor: '#efc' }}>
          test
        </div>
      </Tip>
      <Tip title="ttile1">
        <div style={{ position: 'absolute', width: 40, height: 40, top: 60, left: 240, backgroundColor: '#efc' }}>
          <div>
            <div>2323</div>
          </div>
        </div>
      </Tip>
      <Tip title={<div>sdqwd32</div>}>
        <div style={{ position: 'absolute', width: 40, height: 40, top: 230, left: 10, backgroundColor: '#efc' }}>
          test
        </div>
      </Tip>
    </div>
  </ComponentInfo>
);

const meta: Meta<typeof Tip> = {
  title: 'Tip',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
