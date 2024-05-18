'use client';

import { CommandInput as Input } from 'cmdk';
import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const CommandInput = ({ color, variant, className, ...props }, ref) => {
  return (
    <Input
      className={control({
        color,
        variant,
        size: 'md',
        className: cn('relative z-10 -mb-px rounded-b-none', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandInput);
