import React, { useLayoutEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { useEvent } from '../../hooks/useEvent';
import s from './InfinityList.module.sass';

export type InfinityListProps<T, P extends { data: T } = { data: T }> = {
  className?: string;
  style?: React.CSSProperties;
  items: T[];
  itemElement: React.ComponentType<P>;
  itemHeight: number;
  itemProps?: P;
  onEnd: () => void;
  onStart: () => void;
  reserve?: number;
};

const RESERVE = 100;

export type InfinityListItemType<T> = {
  index: number;
  value: T;
};

export const InfinityList = <T, P extends { data: T } = { data: T }>({
  className,
  items,
  itemElement: ItemElement,
  style,
  itemProps = {} as P,
  reserve = RESERVE,
  itemHeight,
  onEnd,
  onStart,
}: InfinityListProps<T, P>) => {
  const root = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();
  const prevPosition = useRef<number>(null);
  const [points, setPoints] = useState<InfinityListItemType<T>[]>(() => {
    return items.map((value, index) => ({ value, index }));
  });

  const calcItems = useEvent(() => {
    const newItems: InfinityListItemType<T>[] = [];
    const rootRect = root.current.getBoundingClientRect();
    const TOP = root.current.scrollTop - reserve;
    const BOTTOM = TOP + rootRect.height + reserve;
    items.forEach((value, i) => {
      const top = i * itemHeight;
      const bottom = (i + 1) * itemHeight;
      if (top < TOP && bottom < TOP) return;
      if (top > BOTTOM && bottom > BOTTOM) return;

      newItems.push({ value, index: i });
    });
    setPoints(newItems);
  });

  useLayoutEffect(calcItems, [items, itemHeight, calcItems]);

  useLayoutEffect(() => {
    let timeoutId: number;
    const fn = () => {
      cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(calcItems);
    };
    const observer = new ResizeObserver(fn);

    observer.observe(root.current);

    return () => observer.disconnect();
  }, [calcItems]);

  const timeoutId = useRef<number>();
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
      <div ref={holder} style={{ height: itemHeight * items.length }} className={s.holder}>
        {points.map((item) => (
          <div className={s.item} style={{ height: itemHeight, top: itemHeight * item.index }} key={item.index}>
            <ItemElement {...itemProps} data={item.value} />
          </div>
        ))}
      </div>
    </div>
  );
};
