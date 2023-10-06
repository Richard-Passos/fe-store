'use client';

import { Content } from '@radix-ui/react-collapsible';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CollapsibleContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CollapsibleContent);
