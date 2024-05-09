'use client';

import { Description } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const AlertDialogDescription = ({ className, ...props }, ref) => {
  return (
    <Description
      asChild
      ref={ref}
    >
      <TextDescription
        className={cn('text-sm', className)}
        {...props}
      />
    </Description>
  );
};

export default forwardRef(AlertDialogDescription);
