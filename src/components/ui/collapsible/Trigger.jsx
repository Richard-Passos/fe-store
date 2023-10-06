'use client';

import { Trigger } from '@radix-ui/react-collapsible';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CollapsibleTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CollapsibleTrigger);
