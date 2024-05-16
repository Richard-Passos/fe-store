'use client';

import { Cancel } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const AlertDialogCancel = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <Cancel
      className={button({
        color,
        variant,
        size,
        className: cn('max-sm:w-full', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogCancel);
