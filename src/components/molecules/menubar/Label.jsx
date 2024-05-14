'use client';

import { Label as RadixLabel } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { Label } from '@/components/atoms';
import { cn } from '@/utils';

const MenubarLabel = ({ className, asChild, children, ...props }, ref) => {
  return (
    <Label
      asChild
      className={cn('opacity-75', className)}
      ref={ref}
      {...props}
    >
      <RadixLabel asChild={asChild}>{children}</RadixLabel>
    </Label>
  );
};

export default forwardRef(MenubarLabel);
