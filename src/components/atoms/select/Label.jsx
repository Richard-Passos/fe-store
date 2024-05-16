'use client';

import { Label } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectLabel = ({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'py-1.5 pl-8 pr-4 text-sm/none font-medium text-content/75 first-letter:uppercase',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectLabel);
