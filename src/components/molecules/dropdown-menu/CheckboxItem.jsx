'use client';

import { CheckboxItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItem } from './variants';

const DropdownMenuCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={dropdownMenuItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuCheckboxItem);
