'use client';

import { CommandEmpty as Empty } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandEmpty = ({ className, ...props }, ref) => {
  return (
    <Empty
      className={cn(
        'flex flex-col items-center justify-center py-md text-center',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandEmpty);
