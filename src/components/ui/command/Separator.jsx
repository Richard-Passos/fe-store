'use client';

import { Command } from 'cmdk';

import { cn } from '@/utils';

const CommandSeparator = ({ className, ...props }) => {
  return (
    <Command.Separator
      className={cn('-mx-1 h-px bg-muted-content/50', className)}
      {...props}
    />
  );
};

export default CommandSeparator;
