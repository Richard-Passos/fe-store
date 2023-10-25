'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DropdownMenuLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn('px-4 py-1.5 text-sm font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuLabel);
