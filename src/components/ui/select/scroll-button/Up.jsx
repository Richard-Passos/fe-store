'use client';

import { ScrollUpButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import scrollButtonVariants from './variants';

const SelectScrollUpButton = ({ className, ...props }, ref) => {
  return (
    <ScrollUpButton
      className={cn(scrollButtonVariants({ side: 'up' }), className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollUpButton);
