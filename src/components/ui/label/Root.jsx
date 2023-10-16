'use client';

import { Root } from '@radix-ui/react-label';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Label = ({ className, ...props }, ref) => (
  <Root
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    ref={ref}
    {...props}
  />
);

export default forwardRef(Label);
