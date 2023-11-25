import React from 'react';
import cn from 'clsx';
import s from './ComponentInfo.module.sass';

export type ComponentInfoProps = {
  className?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
};

export const ComponentInfo = ({ className, desc, title, children }: ComponentInfoProps) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.title}>{title}</div>
      <div>{desc}</div>
      <div className={s.main}>{children}</div>
    </div>
  );
};
