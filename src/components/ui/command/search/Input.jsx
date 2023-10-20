'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandSearchInput = ({ className, ...props }, ref) => {
  return (
    <Command.Input
      className={cn(
        'flex h-10 w-full bg-transparent pl-7 text-sm outline-none placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandSearchInput);
