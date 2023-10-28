'use client';

import { Root } from '@radix-ui/react-separator';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Separator = ({ className, orientation, ...props }, ref) => {
  return (
    <Root
      className={cn(separatorVariants({ orientation }), className)}
      decorative
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

const separatorVariants = cnv({
  base: 'shrink-0 bg-muted-content/50',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export default forwardRef(Separator);
