import { forwardRef } from 'react';

import { cn, cnv, variantsColor } from '@/utils';

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
  base: 'relative w-full max-w-lg rounded-md border border-transparent p-4',
  variants: {
    color: variantsColor,
    variant: {
      filled: 'text-base-content bg-base',
      outline: 'border-base text-base',
    },
  },
  defaultVariants: {
    color: 'info',
    variant: 'filled',
  },
});

export default forwardRef(Alert);
