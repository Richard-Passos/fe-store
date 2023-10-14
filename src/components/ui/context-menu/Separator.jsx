'use client';

import { Separator } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuSeparator = ({ className, ...props }, ref) => {
  return (
    <Separator
      className={cn('-mx-1 my-1 h-px bg-muted-content/50', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSeparator);
