'use client';

import { Description } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const AlertDialogDescription = (
  { className, asChild, children, ...props },
  ref
) => {
  return (
    <TextDescription
      className={cn('text-sm', className)}
      ref={ref}
      {...props}
    >
      <Description asChild={asChild}>{children}</Description>
    </TextDescription>
  );
};

export default forwardRef(AlertDialogDescription);
