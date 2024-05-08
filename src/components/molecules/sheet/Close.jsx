'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SheetClose = ({ className, ...props }, ref) => {
  return (
    <Close
      className={cn(
        'absolute right-4 top-4 flex size-6 items-center justify-center rounded-sm transition-colors hover:bg-content/10 disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-1/2',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetClose);
