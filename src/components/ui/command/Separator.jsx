'use client';

import { Command } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandSeparator = ({ className, ...props }, ref) => {
  return (
    <Command.Separator
      className={cn('-mx-1 h-px bg-muted', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandSeparator);
