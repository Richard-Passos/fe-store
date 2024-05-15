'use client';

import { Label as RadixLabel } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { Label } from '@/components/atoms';
import { cn } from '@/utils';

const DropdownMenuLabel = ({ className, asChild, children, ...props }, ref) => {
  return (
    <Label
      asChild
      className={cn('px-3 py-1.5 text-content/75', className)}
      ref={ref}
      {...props}
    >
      <RadixLabel asChild={asChild}>{children}</RadixLabel>
    </Label>
  );
};

export default forwardRef(DropdownMenuLabel);
