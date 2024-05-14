'use client';

import { Action } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const ToastAction = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Action
      className={button({
        color,
        variant,
        size,
        className: cn('shrink-0 max-sm:w-full', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastAction);
