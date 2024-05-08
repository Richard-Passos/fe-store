'use client';

import { CommandEmpty as Empty } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandEmpty = ({ className, ...props }, ref) => {
  return (
    <Empty
      className={cn('py-6 text-center text-sm text-content/75', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandEmpty);
