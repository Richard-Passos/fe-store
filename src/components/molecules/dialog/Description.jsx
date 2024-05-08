'use client';

import { Description } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogDescription = ({ className, ...props }, ref) => {
  return (
    <Description
      className={cn('text-sm text-content/75', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogDescription);
