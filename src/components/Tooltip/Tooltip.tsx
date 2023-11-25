import React, { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import cn from 'clsx';
import { createPortal } from 'react-dom';
import s from './Tooltip.module.sass';

export type TooltipProps = {
  className?: string;
  children: React.ReactNode;
  title: React.ReactNode;
  timeout?: number;
};

export type TooltipPosition = {
  x: number;
  y: number;
};

const initial = { x: -100000, y: -100000 };

export const Tooltip: FC<TooltipProps> = ({ className, children, title, timeout = 1000 }) => {
  const [position, setPosition] = useState<TooltipPosition>(initial);
  const unmounted = useRef(false);
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const target = useRef<HTMLElement>();
  const tooltip = useRef<HTMLDivElement>();
  const timeoutId = useRef(0);

  const { onMouseEnter, onMouseLeave, resetTimeout } = useMemo(() => {
    const _resetTimeout = () => clearTimeout(timeoutId.current);
    return {
      resetTimeout: _resetTimeout,
      onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
        _resetTimeout();
        target.current = e.currentTarget;
        const rect = target.current?.getBoundingClientRect();
        const tooltipRect = tooltip.current?.getBoundingClientRect();
        if (!rect || !tooltipRect) return;
        const x = rect?.x - rect?.width / 2 + tooltipRect?.width / 2;
        const y = rect?.top || e.clientY;
        setPosition((v) => {
          if (v.x === x && v.y === y) return v;
          return { x, y };
        });
      },
      onMouseLeave: () =>
        (timeoutId.current = window.setTimeout(() => {
          if (!unmounted.current) setPosition(initial);
        }, timeout)),
    };
  }, [timeout]);

  useLayoutEffect(() => {
    if (target.current && position !== initial) {
      const tooltipRect = tooltip.current.getBoundingClientRect();
      const targetRect = target.current.getBoundingClientRect();

      if (tooltipRect.top < 0) setPosition((v) => ({ ...v, y: tooltipRect.height + targetRect.bottom }));
      else if (tooltipRect.bottom > window.innerHeight) {
        setPosition((v) => ({ ...v, y: targetRect.top }));
      }
      if (tooltipRect.left < 0) setPosition((v) => ({ ...v, x: Math.round(tooltipRect.width / 2) + targetRect.left }));
      else if (tooltipRect.right > window.innerWidth) {
        setPosition((v) => ({ ...v, x: targetRect.right - Math.round(tooltipRect.width / 2) }));
      }
    }
  }, [position]);

  if (!children || typeof children !== 'object' || React.Children.count(children) !== 1) return <>{children}</>;

  return (
    <>
      {position &&
        createPortal(
          <div
            onMouseEnter={resetTimeout}
            onMouseLeave={onMouseLeave}
            ref={tooltip}
            style={{ top: position.y, left: position.x }}
            className={cn(s.root, className)}
          >
            {title}
          </div>,
          document.body
        )}
      {React.cloneElement(React.Children.only(children) as React.ReactElement, { onMouseEnter, onMouseLeave })}
    </>
  );
};
