'use client';

import { Item } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-muted focus:text-muted-content data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuItem);
