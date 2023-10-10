'use client';

import { SubTrigger } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-content data-open:bg-accent data-open:text-accent-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubTrigger);
