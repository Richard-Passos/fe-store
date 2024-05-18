'use client';

import { ItemIndicator } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectItemIndicator = (
  { className, forceMount, children, ...props },
  ref
) => {
  return (
    <div
      className={cn('size-3.5', className)}
      data-item-indicator
      ref={ref}
      {...props}
    >
      <ItemIndicator
        asChild
        forceMount={forceMount}
      >
        {children}
      </ItemIndicator>
    </div>
  );
};

export default forwardRef(SelectItemIndicator);
