'use client';

import { ItemIndicator } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectItemIndicator = ({ className, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn(
        'absolute left-[.5625rem] inline-flex h-3.5 w-3.5 items-center justify-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectItemIndicator);
