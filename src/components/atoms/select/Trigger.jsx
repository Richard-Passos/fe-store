'use client';

import { Trigger } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const SelectTrigger = ({ color, variant, className, ...props }, ref) => {
  return (
    <Trigger
      className={control({
        color,
        variant,
        className: cn(
          'items-center justify-between data-open:outline [&_:not(:has(svg),svg)]:data-[placeholder]:text-content/75',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectTrigger);
