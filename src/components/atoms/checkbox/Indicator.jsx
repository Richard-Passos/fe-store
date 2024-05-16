'use client';

import { Indicator } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CheckboxIndicator = ({ className, ...props }, ref) => {
  return (
    <Indicator
      className={cn('size-2/3', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CheckboxIndicator);
