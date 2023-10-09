'use client';

import { Command as Root } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Command = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-muted text-muted-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Command);
