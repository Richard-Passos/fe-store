'use client';

import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItem } from '../variants';

const DropdownMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={dropdownMenuItem({
        color,
        className: cn('data-open:bg-active', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubTrigger);
