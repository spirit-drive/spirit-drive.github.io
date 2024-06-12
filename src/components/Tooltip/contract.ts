import { ReactNode } from 'react';

export type Placements =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  visible?: boolean;
  placement?: Placements;
};
