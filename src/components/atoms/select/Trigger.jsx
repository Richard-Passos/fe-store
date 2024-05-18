'use client';

import { Trigger } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const SelectTrigger = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Trigger
      className={control({
        color,
        variant,
        size,
        className: cn(
          'data-open:outline data-[placeholder]:font-normal data-[placeholder]:text-content/75 [&_svg]:text-content',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectTrigger);
