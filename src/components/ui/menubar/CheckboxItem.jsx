'use client';

import { CheckboxItem } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from './Item';

const MenubarCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={cn(itemVariants(), 'relative pl-[2.375rem]', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarCheckboxItem);
