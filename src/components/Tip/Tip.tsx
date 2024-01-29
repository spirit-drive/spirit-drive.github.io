import React, { FC, ReactFragment, useEffect, useLayoutEffect, useReducer, useRef } from 'react';
import cn from 'clsx';
import s from './Tip.module.sass';
import { createPortal } from 'react-dom';

export type TipProps = {
  className?: string;
  children: React.ReactElement;
  title: React.ReactNode;
  container?: HTMLElement;
};

export const Tip: FC<TipProps> = ({ className, children, title, container = document?.body }) => {
  const tip = useRef<HTMLDivElement>();
  const holder = useRef<HTMLDivElement>();

  useEffect(() => {
    const rect = holder.current?.getBoundingClientRect();
    // const rectContainer = container.getBoundingClientRect();
    // tip.current.style.left = `${rect.x - rectContainer.x}px`;
    // tip.current.style.top = `${rect.y - rectContainer.y}px`;
    tip.current.style.left = `${rect.x + Math.round(rect.width / 2)}px`;
    tip.current.style.top = `${rect.y}px`;
  }, [container]);

  const child = React.Children.only(children);
  const { style, className: classN } = child.props;
  const clonedElement = React.cloneElement(React.Children.only(children), {
    ...child.props,
    style: null,
    className: null,
  });

  const parent = React.createElement(
    child.type,
    { ...child.props, style, className: classN, ref: holder },
    clonedElement
  );

  return (
    <>
      {createPortal(
        <div ref={tip} className={cn(s.root, className)}>
          {title}
        </div>,
        container
      )}
      {parent}
    </>
  );
};
