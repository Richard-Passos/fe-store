'use client';

import { Label } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn('px-4 py-1.5 pl-8 text-sm font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectLabel);
