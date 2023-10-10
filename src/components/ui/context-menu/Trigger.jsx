'use client';

import { Trigger } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuTrigger);
