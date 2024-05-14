'use client';

import { SubContent } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuContent } from '../variants';

const DropdownMenuSubContent = ({ color, className, ...props }, ref) => {
  return (
    <SubContent
      className={dropdownMenuContent({
        color,
        className: cn('min-w-[8rem] shadow-lg', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubContent);
