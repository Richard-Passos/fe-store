'use client';

import { Root } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const Checkbox = ({ color, variant, size, className, ...props }, ref) => (
  <Root
    className={control({
      color,
      variant,
      size,
      className: cn('size-5 shrink-0 justify-center px-0', className)
    })}
    ref={ref}
    {...props}
  />
);

export default forwardRef(Checkbox);
