'use client';

import { Command as Root } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Command = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md border bg-main',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Command);
