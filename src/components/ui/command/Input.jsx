'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandInput = ({ className, ...props }, ref) => {
  return (
    <Command.Input
      className={cn(
        'flex h-12 w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandInput);
