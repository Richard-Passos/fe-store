'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';

import { cn } from '@/utils';

const Label = ({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    ref={ref}
    {...props}
  />
);
