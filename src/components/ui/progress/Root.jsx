'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { ProgressContext } from '@/contexts';
import { cn, cnv } from '@/utils';

import variantsColor from '../variantsColor';

const Progress = (
  { value = 0, min = 0, max = 100, variants, className, ...props },
  ref,
) => {
  props = {
    ...props,
    max,
    min,
    ref,
    value,
  };

  return (
    <ProgressContext.Provider value={{ value, min, max }}>
      <Root
        className={cn(progressVariants(variants), className)}
        {...props}
      />
    </ProgressContext.Provider>
  );
};

const progressVariants = cnv({
  base: 'w-full overflow-hidden rounded-full bg-main/20',
  variants: {
    color: variantsColor,
    size: {
      sm: 'h-2',
      md: 'h-4',
      lg: 'h-6',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export default forwardRef(Progress);
export { progressVariants };
