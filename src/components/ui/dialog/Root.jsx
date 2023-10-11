'use client';

import { Root } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Dialog = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Dialog);
