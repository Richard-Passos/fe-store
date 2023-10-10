'use client';

import { Group } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuGroup = ({ className, ...props }, ref) => {
  return (
    <Group
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuGroup);
