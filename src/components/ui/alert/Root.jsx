'use client';

import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Alert = ({ className, variant, ...props }, ref) => {
  return (
    <section
      className={cn(alertVariants({ variant }), className)}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

const alertVariants = cnv({
  base: 'relative w-full rounded-lg border p-4',
  variants: {
    color: {
      base: 'bg-base text-content',
      danger:
        'border-danger/50 text-danger dark:border-danger [&>svg]:text-danger',
    },
  },
  defaultVariants: {
    color: 'base',
  },
});

export default forwardRef(Alert);
