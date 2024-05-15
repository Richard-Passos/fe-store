'use client';

import { Viewport } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastViewport = ({ className, ...props }, ref) => {
  return (
    <Viewport
      className={cn(
        'fixed z-[100] flex max-h-svh flex-col-reverse items-center gap-xs overflow-hidden p-xs outline-none max-sm:inset-x-0 max-sm:top-0 sm:bottom-0 sm:right-0 sm:items-end',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastViewport);
