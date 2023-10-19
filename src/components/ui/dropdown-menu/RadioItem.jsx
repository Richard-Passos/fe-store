'use client';

import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from './Item';

const DropdownMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(itemVariants(), 'relative pl-[2.375rem]', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuRadioItem);
