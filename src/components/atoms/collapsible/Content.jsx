'use client';

import { Content } from '@radix-ui/react-collapsible';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CollapsibleContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        '[--collapsible-content-h:--radix-collapsible-content-height] [--collapsible-content-w:--radix-collapsible-content-width]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CollapsibleContent);
