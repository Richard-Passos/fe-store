'use client';

import { Thumb } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ScrollAreaScrollbarThumb = ({ className, ...props }, ref) => {
  return (
    <Thumb
      className={cn(
        'bg-content/75/25 hover:bg-content/75/50 flex-1 rounded-full transition-colors',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollAreaScrollbarThumb);
