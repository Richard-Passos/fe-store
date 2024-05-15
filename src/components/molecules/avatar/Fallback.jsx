'use client';

import { Fallback } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AvatarFallback = ({ className, ...props }, ref) => {
  return (
    <Fallback
      className={cn('flex size-full items-center justify-center', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AvatarFallback);
