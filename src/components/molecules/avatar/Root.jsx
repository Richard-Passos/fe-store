'use client';

import { Root } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Avatar = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'size-10 shrink-0 overflow-hidden rounded-full border bg-muted',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Avatar);
