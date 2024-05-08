'use client';

import { Trigger } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import controlVariants from '@/components/controlVariants';
import { cn } from '@/utils';

const SelectTrigger = ({ color, type, className, ...props }, ref) => {
  return (
    <Trigger
      className={controlVariants({
        color,
        type,
        className: cn(
          'items-center justify-between data-open:outline [&>:not(svg)]:data-[placeholder]:text-content/75',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectTrigger);
