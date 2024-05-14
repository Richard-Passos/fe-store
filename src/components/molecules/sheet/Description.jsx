'use client';

import { Description } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const SheetDescription = ({ className, asChild, children, ...props }, ref) => {
  return (
    <TextDescription
      asChild
      className={cn('text-sm/relaxed', className)}
      ref={ref}
      {...props}
    >
      <Description asChild={asChild}>{children}</Description>
    </TextDescription>
  );
};

export default forwardRef(SheetDescription);
