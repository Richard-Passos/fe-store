'use client';

import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from './Item';

const DropdownMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(itemVariants(), 'pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuRadioItem);
