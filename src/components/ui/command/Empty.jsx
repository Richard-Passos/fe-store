'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandEmpty = ({ className, ...props }, ref) => {
  return (
    <Command.Empty
      className={cn('py-6 text-center text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandEmpty);
