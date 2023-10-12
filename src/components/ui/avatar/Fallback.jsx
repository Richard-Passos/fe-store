'use client';

import { Fallback } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AvatarFallback = ({ className, ...props }, ref) => {
  return (
    <Fallback
      className={cn(
        'rounded-inherit flex h-full w-full items-center justify-center bg-muted',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AvatarFallback);
