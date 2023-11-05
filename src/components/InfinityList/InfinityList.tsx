import React, { useLayoutEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { useEvent } from '../../hooks/useEvent';
import s from './InfinityList.module.sass';

export type InfinityListProps<T, P extends { data: T } = { data: T }> = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  items: T[];
  itemElement: React.ComponentType<P>;
  itemHeight: number;
  itemProps?: P;
  onEnd: () => void;
  onStart: () => void;
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
  ...props
}: InfinityListProps<T, P>) => {
  const root = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();
  const vars = useRef<{ prevScrollTop: number; timeoutId: number }>({ prevScrollTop: null, timeoutId: null });
  const [visibleItems, setVisibleItems] = useState<InfinityListVisibleItemType<T>[]>(() => {
    return items.map((value, index) => ({ value, index }));
  });

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

  const handleInfinityScroll = () => {
    const rootRect = root.current.getBoundingClientRect();
    const holderRect = holder.current.getBoundingClientRect();
    const bottomDiff = holderRect.bottom - rootRect.bottom;
    const topDiff = rootRect.top - holderRect.top;
    if (vars.current.prevScrollTop !== null) {
      if (vars.current.prevScrollTop < root.current.scrollTop && bottomDiff <= reserve) {
        onEnd();
      } else if (vars.current.prevScrollTop > root.current.scrollTop && topDiff <= reserve) {
        onStart();
        clearTimeout(vars.current.timeoutId);
        vars.current.timeoutId = window.setTimeout(() => {
          root.current.scrollBy({ top: holder.current.getBoundingClientRect().height - holderRect.height });
        });
      }
    }
    vars.current.prevScrollTop = root.current.scrollTop;
  };

  const commonCalc = useEvent(() => {
    calcVisibleItems();
    handleInfinityScroll();
  });

  useLayoutEffect(commonCalc, [items, itemHeight, commonCalc]);

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

  return (
    <div {...props} ref={root} className={cn(s.root, 'InfinityList', className)} onScroll={commonCalc}>
      <div ref={holder} style={{ height: itemHeight * items.length }} className={cn(s.holder, 'InfinityList__holder')}>
        {visibleItems.map((item) => {
          const style = { height: itemHeight, top: itemHeight * item.index };
          return (
            <div className={cn(s.item, 'InfinityList__item')} style={style} key={item.index}>
              <ItemElement {...itemProps} data={item.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
