'use client';

import { CommandRoot } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Command = ({ className, ...props }, ref) => {
  return (
    <CommandRoot
      className={cn(
        'w-full outline-none drop-shadow-md dark:drop-shadow-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Command);
