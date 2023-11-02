import React, { FC, useRef } from 'react';
import cn from 'clsx';
import s from './InfinityList.module.sass';

export type InfinityListProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode[];
  onEnd: () => void;
  onStart: () => void;
  reserve?: number;
};

const RESERVE = 100;

export const InfinityList: FC<InfinityListProps> = ({
  className,
  children,
  style,
  reserve = RESERVE,
  onEnd,
  onStart,
}) => {
  const root = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();
  const prevPosition = useRef<number>(null);

  if (!Array.isArray(children)) throw new Error(`infinity list work with only array as children`);

  const onScroll = () => {
    const rootRect = root.current.getBoundingClientRect();
    const holderRect = holder.current.getBoundingClientRect();
    const bottomDiff = holderRect.bottom - rootRect.bottom;
    const topDiff = rootRect.top - holderRect.top;
    if (prevPosition.current !== null) {
      if (prevPosition.current > holderRect.top && bottomDiff <= reserve) {
        onEnd();
      } else if (prevPosition.current < holderRect.top && topDiff <= reserve) {
        onStart();
        requestAnimationFrame(() => {
          root.current.scrollBy({ top: holder.current.getBoundingClientRect().height - holderRect.height });
        });
      }
    }
    prevPosition.current = holderRect.top;
  };

  return (
    <div ref={root} style={style} className={cn(s.root, className)} onScroll={onScroll}>
      <div ref={holder} className={s.holder}>
        {children}
      </div>
    </div>
  );
};
