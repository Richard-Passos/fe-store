'use client';

import { Trigger } from '@radix-ui/react-collapsible';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';

const CollapsibleTrigger = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <Trigger
      className={button({
        color,
        variant,
        size,
        className
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CollapsibleTrigger);
