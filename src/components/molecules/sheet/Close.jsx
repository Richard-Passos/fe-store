'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const SheetClose = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Close
      className={button({
        color: color ?? 'inherit',
        variant,
        size,
        className: cn('absolute right-4 top-4 size-6 px-0', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetClose);
