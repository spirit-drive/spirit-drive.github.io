import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

import { TooltipProps } from './contract';
import s from './Tooltip.module.sass';

export const Tooltip = ({ children, content, disabled, visible, placement = 'auto', ...props }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const isOpen = visible || (!disabled && isHovered);

  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: 'fixed',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const updatePosition = () => {
    update?.();
  };

  const show = () => {
    updatePosition();
    setIsHovered(true);
  };

  const hide = () => {
    updatePosition();
    setIsHovered(false);
  };

  useEffect(() => {
    updatePosition();
  }, [isOpen]);

  return (
    <div onMouseDown={show} onMouseEnter={show} onMouseLeave={hide} className={s.tooltip_container}>
      <div ref={setReferenceElement}>{children}</div>

      {isOpen && (
        <div className={s.tooltip_popup} style={styles.popper} ref={setPopperElement} {...props} {...attributes.popper}>
          {content}
        </div>
      )}
    </div>
  );
};
