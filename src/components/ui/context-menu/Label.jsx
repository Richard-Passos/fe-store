'use client';

import { Label } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'px-4 py-1.5 text-sm font-semibold text-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuLabel);
