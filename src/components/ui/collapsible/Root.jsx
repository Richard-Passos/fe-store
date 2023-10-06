'use client';

import { Root } from '@radix-ui/react-collapsible';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Collapsible = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Collapsible);
