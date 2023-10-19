'use client';

import { SubContent } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contentVariants } from '../Content';

const DropdownMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(contentVariants(), 'shadow-lg', className)}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubContent);
