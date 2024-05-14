'use client';

import { Trigger } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';

const DropdownMenuTrigger = (
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

export default forwardRef(DropdownMenuTrigger);
