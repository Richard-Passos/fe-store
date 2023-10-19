'use client';

import { ItemIndicator } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarItemIndicator = ({ className, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn(
        'absolute left-4 flex h-3.5 w-3.5 items-center justify-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarItemIndicator);
