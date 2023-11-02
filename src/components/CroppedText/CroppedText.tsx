import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import cn from 'clsx';
import s from './CroppedText.module.sass';

export type CroppedTextProps = {
  className?: string;
  children: string;
  opened: boolean;
  rows?: number;
};

const INITIAL_VALUE = 'I';

export const CroppedText: FC<CroppedTextProps> = ({ className, children, opened, rows = 3 }) => {
  const [text, setText] = useState<string>(INITIAL_VALUE);

  const root = useRef<HTMLDivElement>();
  const texts = useRef<string[]>([]);
  const prevIndex = useRef<number>(0);
  const min = useRef<number>(0);
  const height = useRef<number>();
  const max = useRef<number>(0);
  const lineHeight = useRef<number>();
  const rowsCopy = useRef(rows);
  rowsCopy.current = rows;

  const items = useRef<string[]>();
  useLayoutEffect(() => {
    lineHeight.current = lineHeight.current ?? root.current.getBoundingClientRect()?.height;
    items.current = children?.split(' ') || [];
    max.current = items.current.length - 1;
  }, [children]);

  const reset = useRef(() => {
    height.current = Math.round(lineHeight.current * rowsCopy.current);
    texts.current = [];
    prevIndex.current = 0;
    min.current = 0;
    max.current = items.current.length - 1;
  });

  useLayoutEffect(() => {
    setText(INITIAL_VALUE);
    reset.current();
  }, [rows]);

  useLayoutEffect(() => {
    let timeout: number;
    const fn = () => {
      cancelAnimationFrame(timeout);
      timeout = window.requestAnimationFrame(() => {
        setText(INITIAL_VALUE);
        reset.current();
      });
    };
    const observer = new ResizeObserver(fn);

    observer.observe(root.current);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const checkout = (callback: () => void) => {
      if (texts.current.length < 3) {
        texts.current.push(text);
        callback();
        return;
      }
      texts.current.splice(0, 1);
      texts.current.push(text);
      if (texts.current[0] === texts.current[2]) {
        reset.current();
        return;
      }
      callback();
    };
    const getNewText = (count: number): string => {
      if (count >= items.current.length - 1) return items.current.join(' ');
      return [items.current.slice(0, count).join(' '), count ? '...' : ''].join('');
    };

    checkout(() => {
      if (root.current.getBoundingClientRect().height <= height.current) {
        min.current = prevIndex.current;
      } else {
        max.current = prevIndex.current - 1;
      }
      const index = Math.round((min.current + max.current) / 2);
      prevIndex.current = index;
      setText(getNewText(index));
    });
  }, [text, children]);

  return (
    <div ref={root} className={cn(s.root, className)}>
      {opened ? children : text}
    </div>
  );
};
