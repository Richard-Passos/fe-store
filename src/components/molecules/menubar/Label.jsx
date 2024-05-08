'use client';

import { Label } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'px-3 py-1.5 text-sm font-semibold text-content/75',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarLabel);