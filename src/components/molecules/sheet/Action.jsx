'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const SheetAction = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Close
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

export default forwardRef(SheetAction);
