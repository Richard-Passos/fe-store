'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandItem = ({ className, ...props }, ref) => {
  return (
    <Command.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-4 py-1.5 text-sm outline-none aria-selected:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandItem);
