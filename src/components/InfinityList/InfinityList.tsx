import React, { MutableRefObject, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { useEvent } from '../../hooks/useEvent';
import s from './InfinityList.module.sass';

export type InfinityListRef = {
  scrollTo: (index: number) => void;
};

export type InfinityListProps<T, P extends { data: T } = { data: T }> = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  items: T[];
  itemElement: React.ComponentType<P>;
  itemHeight: number;
  itemProps?: P;
  innerRef?: MutableRefObject<InfinityListRef>;
  endLoading?: React.ReactNode;
  startLoading?: React.ReactNode;
  onEnd: () => Promise<void>;
  onStart: () => Promise<void>;
  reserve?: number;
};

const RESERVE = 100;

export type InfinityListVisibleItemType<T> = {
  index: number;
  value: T;
};

const stringifyItems = (items: InfinityListVisibleItemType<unknown>[]) => items.map((i) => i.index).join('_');
const isEqualItems = (a: InfinityListVisibleItemType<unknown>[], b: InfinityListVisibleItemType<unknown>[]) =>
  a.length === b.length && stringifyItems(a) === stringifyItems(b);

export const InfinityList = <T, P extends { data: T } = { data: T }>({
  className,
  items,
  itemElement: ItemElement,
  itemProps = {} as P,
  reserve = RESERVE,
  itemHeight,
  onEnd,
  onStart,
  innerRef,
  startLoading,
  endLoading,
  ...props
}: InfinityListProps<T, P>) => {
  const root = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();
  const prevScrollTop = useRef<number>(null);
  const [visibleItems, setVisibleItems] = useState<InfinityListVisibleItemType<T>[]>(() =>
    items.map((value, index) => ({ value, index }))
  );

  const calcVisibleItems = () => {
    const newVisibleItems: InfinityListVisibleItemType<T>[] = [];
    const rootRect = root.current.getBoundingClientRect();
    const topSide = root.current.scrollTop - reserve;
    const bottomSide = topSide + rootRect.height + reserve;
    items.forEach((value, i) => {
      const itemTop = i * itemHeight;
      const itemBottom = (i + 1) * itemHeight;
      if (itemTop < topSide && itemBottom < topSide) return;
      if (itemTop > bottomSide && itemBottom > bottomSide) return;

      newVisibleItems.push({ value, index: i });
    });

    setVisibleItems((v) => (isEqualItems(v, newVisibleItems) ? v : newVisibleItems));
  };

  const applied = useRef<{ end: boolean; start: boolean }>({ end: false, start: false });

  const handleInfinityScroll = () => {
    const rootRect = root.current.getBoundingClientRect();
    const holderRect = holder.current.getBoundingClientRect();
    const bottomDiff = holderRect.bottom - rootRect.bottom;
    const topDiff = rootRect.top - holderRect.top;
    if (prevScrollTop.current !== null) {
      if (prevScrollTop.current < root.current.scrollTop && bottomDiff <= reserve) {
        if (applied.current.end) return;
        applied.current.end = true;
        onEnd().then(() => {
          applied.current.end = false;
        });
      } else if (prevScrollTop.current > root.current.scrollTop && topDiff <= reserve) {
        if (applied.current.end) return;
        applied.current.end = true;
        onStart().then(() => {
          applied.current.end = false;
          root.current.scrollBy({ top: holder.current.getBoundingClientRect().height - holderRect.height });
        });
      }
    }
    prevScrollTop.current = root.current.scrollTop;
  };

  const commonCalc = useEvent(() => {
    calcVisibleItems();
    handleInfinityScroll();
  });

  useLayoutEffect(commonCalc, [items, itemHeight, commonCalc]);

  const startLoadingCount = startLoading ? 1 : 0;
  const endLoadingCount = endLoading ? 1 : 0;

  // При изменении размеров элемента - пересчитаем все
  useLayoutEffect(() => {
    let timeoutId: number;
    const fn = () => {
      // requestAnimationFrame предотвращает слишком частые пересчеты,
      // которые происходят при изменении размера окна и в некоторых браузерах
      // приводят к ошибкам
      cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(commonCalc);
    };
    const observer = new ResizeObserver(fn);

    observer.observe(root.current);

    return () => observer.disconnect();
  }, [commonCalc]);

  useImperativeHandle(innerRef, () => ({
    scrollTo: (index: number) => root.current.scrollTo({ top: (index + startLoadingCount) * itemHeight }),
  }));

  const height = itemHeight * (items.length + endLoadingCount + startLoadingCount);

  const startElem = startLoading && (
    <div className={cn(s.item, 'InfinityList__item')} style={{ height: itemHeight, top: 0 }} key="start">
      {startLoading}
    </div>
  );

  const endElem = endLoading && (
    <div
      className={cn(s.item, 'InfinityList__item')}
      style={{ height: itemHeight, top: itemHeight * (endLoadingCount + items.length) }}
      key="end"
    >
      {endLoading}
    </div>
  );

  return (
    <div {...props} ref={root} className={cn(s.root, 'InfinityList', className)} onScroll={commonCalc}>
      <div ref={holder} style={{ height }} className={cn(s.holder, 'InfinityList__holder')}>
        {startElem}
        {visibleItems.map((item) => {
          const style = { height: itemHeight, top: itemHeight * (item.index + startLoadingCount) };
          return (
            <div className={cn(s.item, 'InfinityList__item')} style={style} key={item.index}>
              <ItemElement {...itemProps} data={item.value} />
            </div>
          );
        })}
        {endElem}
      </div>
    </div>
  );
};
