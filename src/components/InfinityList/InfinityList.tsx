import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { useEvent } from '../../hooks/useEvent';
import s from './InfinityList.module.sass';

export type InfinityListProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode[];
  itemHeight: number;
  onEnd: () => void;
  onStart: () => void;
  reserve?: number;
};

const RESERVE = 100;

export type InfinityListItemType = {
  index: number;
  value: React.ReactNode;
};

export const InfinityList: FC<InfinityListProps> = ({
  className,
  children,
  style,
  reserve = RESERVE,
  itemHeight,
  onEnd,
  onStart,
}) => {
  const root = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();
  const timeoutId = useRef<number>();
  const prevPosition = useRef<number>(null);
  const [items, setItems] = useState<InfinityListItemType[]>(() => {
    if (!Array.isArray(children)) return [];
    return children.map((value, index) => ({ value, index }));
  });

  const calcItems = useEvent(() => {
    if (!Array.isArray(children)) return;
    const newItems: InfinityListItemType[] = [];
    const rootRect = root.current.getBoundingClientRect();
    const TOP = root.current.scrollTop - reserve;
    const BOTTOM = TOP + rootRect.height + reserve;
    children.forEach((value, i) => {
      const top = i * itemHeight;
      const bottom = (i + 1) * itemHeight;
      if (top < TOP && bottom < TOP) return;
      if (top > BOTTOM && bottom > BOTTOM) return;

      newItems.push({ value, index: i });
    });
    setItems(newItems);
  });

  useLayoutEffect(calcItems, [children, itemHeight, calcItems]);

  if (!Array.isArray(children)) throw new Error(`infinity list work with only array as children`);

  const onScroll = () => {
    calcItems();
    const rootRect = root.current.getBoundingClientRect();
    const holderRect = holder.current.getBoundingClientRect();
    const bottomDiff = holderRect.bottom - rootRect.bottom;
    const topDiff = rootRect.top - holderRect.top;
    if (prevPosition.current !== null) {
      if (prevPosition.current > holderRect.top && bottomDiff <= reserve) {
        onEnd();
      } else if (prevPosition.current < holderRect.top && topDiff <= reserve) {
        onStart();
        clearTimeout(timeoutId.current);
        timeoutId.current = window.setTimeout(() => {
          root.current.scrollBy({ top: holder.current.getBoundingClientRect().height - holderRect.height });
        });
      }
    }
    prevPosition.current = holderRect.top;
  };

  return (
    <div ref={root} style={style} className={cn(s.root, className)} onScroll={onScroll}>
      <div ref={holder} style={{ height: itemHeight * children.length }} className={s.holder}>
        {items.map((item) => (
          <div className={s.item} style={{ height: itemHeight, top: itemHeight * item.index }} key={item.index}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};
