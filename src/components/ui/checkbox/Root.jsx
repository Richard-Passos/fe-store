'use client';

import { Root } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Checkbox = ({ className, ...props }, ref) => (
  <Root
    className={cn(
      'data-checked:bg-primary data-checked:text-primary-content peer h-4 w-4 shrink-0 rounded-sm border border-primary disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    ref={ref}
    {...props}
  />
);

export default forwardRef(Checkbox);
