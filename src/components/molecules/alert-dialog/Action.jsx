'use client';

import { Action } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const AlertDialogAction = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <Action
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

export default forwardRef(AlertDialogAction);
