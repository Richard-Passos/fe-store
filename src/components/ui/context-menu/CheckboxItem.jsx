'use client';

import { CheckboxItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from './Item';

const ContextMenuCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={cn(itemVariants(), 'relative pl-[2.375rem]', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuCheckboxItem);
