'use client';

import { CommandList as List } from 'cmdk';
import { forwardRef } from 'react';

import box from '@/components/atoms/box/variants';
import { cn } from '@/utils';

const CommandList = ({ color, variant, className, ...props }, ref) => {
  return (
    <List
      className={box({
        color,
        variant,
        className: cn(
          'max-h-80 overflow-y-auto overflow-x-clip rounded-t-none p-1 shadow-none',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandList);
