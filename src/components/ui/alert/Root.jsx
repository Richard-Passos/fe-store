import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import variantsColor from '../variantsColor';

const Alert = ({ className, variants, ...props }, ref) => {
  return (
    <section
      className={cn(alertVariants(variants), className)}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

const alertVariants = cnv({
  base: 'relative w-full max-w-lg rounded-md border border-transparent p-5',
  variants: {
    color: variantsColor,
    variant: {
      filled: 'bg-main text-content',
      outline: 'border-main text-main',
    },
  },
  defaultVariants: {
    color: 'info',
    variant: 'filled',
  },
});

export default forwardRef(Alert);
