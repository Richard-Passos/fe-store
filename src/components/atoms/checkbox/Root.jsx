'use client';

import { Root } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const Checkbox = ({ color, variant, className, ...props }, ref) => (
  <Root
    className={control({
      color,
      variant,
      className: cn(
        'size-5 shrink-0 items-center justify-center px-0',
        className
      )
    })}
    ref={ref}
    {...props}
  />
);

export default forwardRef(Checkbox);
