'use client';

import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItem } from './variants';

const DropdownMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={dropdownMenuItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuRadioItem);
