'use client';

import { Portal } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuPortal = ({ className, ...props }, ref) => {
  return (
    <Portal
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuPortal);
