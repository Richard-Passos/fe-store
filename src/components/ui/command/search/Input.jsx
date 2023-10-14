'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandSearchInput = ({ className, ...props }, ref) => {
  return (
    <Command.Input
      className={cn(
        'placeholder:text-muted-foreground flex h-10 w-full bg-transparent pl-7 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandSearchInput);
