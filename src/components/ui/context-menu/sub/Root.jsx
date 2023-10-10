'use client';

import { Sub } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuSub = ({ className, ...props }, ref) => {
  return (
    <Sub
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSub);
