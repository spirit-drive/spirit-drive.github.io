import React, { useLayoutEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InfinityList, InfinityListRef } from './InfinityList';

const count = 100;
const TIMEOUT = 200;

type TestProps = {
  timeout?: number;
};
const Test = ({ timeout = TIMEOUT }: TestProps) => {
  const [items, setItems] = useState(() =>
    Array(count)
      .fill('')
      .map((_, i) => i + 1)
  );

  const listElem = useRef<InfinityListRef>();

  useLayoutEffect(() => {
    listElem.current.scrollTo(49);
  }, []);

  return (
    <InfinityList
      innerRef={listElem}
      endLoading="Loading..."
      startLoading="Loading..."
      items={items}
      itemElement={({ data }) => <div>{data}</div>}
      itemHeight={20}
      style={{ height: '320px' }}
      onEnd={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setItems((v) => {
              const max = v[v.length - 1];
              return [
                ...v,
                ...Array(count)
                  .fill('')
                  .map((_, i) => max + i + 1),
              ];
            });
            setTimeout(resolve);
          }, timeout);
        });
      }}
      onStart={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
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
            setTimeout(resolve);
          }, timeout);
        });
      }}
    />
  );
};

const meta: Meta<typeof Test> = {
  title: 'InfinityList',
  component: Test,
  args: {
    timeout: 200,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
