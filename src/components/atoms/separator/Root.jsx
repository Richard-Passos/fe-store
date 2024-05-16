'use client';

import { Root } from '@radix-ui/react-separator';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import separator from './variants';

const Separator = ({ className, orientation, ...props }, ref) => {
  return (
    <Root
      className={cn(separator({ orientation }), className)}
      decorative
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Separator);
