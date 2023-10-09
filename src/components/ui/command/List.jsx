'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandList = ({ className, ...props }, ref) => {
  return (
    <Command.List
      className={cn('max-h-80 overflow-y-auto overflow-x-hidden', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandList);
