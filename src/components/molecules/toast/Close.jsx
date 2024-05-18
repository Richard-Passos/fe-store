'use client';

import { Close } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const ToastClose = ({ color, variant, className, ...props }, ref) => {
  return (
    <Close
      className={button({
        color: color ?? 'inherit',
        variant: variant ?? 'ghost',
        className: cn(
          'absolute right-4 top-4 size-6 px-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity] group-focus-within:opacity-100 group-hover:opacity-100 sm:opacity-0 [*:has(+&)]:mr-6',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastClose);
