'use client';

import { ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DropdownMenuItemIndicator = ({ className, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn(
        'absolute left-3.5 flex aspect-square w-3.5 items-center justify-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuItemIndicator);
