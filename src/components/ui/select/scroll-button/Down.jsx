'use client';

import { ScrollDownButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import scrollButtonVariants from './variants';

const SelectScrollDownButton = ({ className, ...props }, ref) => {
  return (
    <ScrollDownButton
      className={cn(scrollButtonVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollDownButton);
