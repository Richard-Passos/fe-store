'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogClose = ({ className, ...props }, ref) => {
  return (
    <Close
      className={cn(
        'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogClose);
