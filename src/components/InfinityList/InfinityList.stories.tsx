import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InfinityList } from './InfinityList';

const count = 100;

const Test = () => {
  const [items, setItems] = useState(() =>
    Array(count)
      .fill('')
      .map((_, i) => i + 1)
  );
  return (
    <InfinityList
      items={items}
      itemElement={({ data }) => <div>{data}</div>}
      itemHeight={20}
      style={{ height: '320px' }}
      onEnd={() => {
        setItems((v) => {
          const max = v[v.length - 1];
          console.log('max');
          return [
            ...v,
            ...Array(count)
              .fill('')
              .map((_, i) => max + i + 1),
          ];
        });
      }}
      onStart={() => {
        setItems((v) => {
          const min = v[0];
          return [
            ...Array(count)
              .fill('')
              .map((_, i) => min - i - 1)
              .reverse(),
            ...v,
          ];
        });
      }}
    />
  );
};

const meta: Meta<typeof InfinityList> = {
  title: 'InfinityList',
  component: Test,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
