'use client';

import { RadioItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from './Item';

const ContextMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(itemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuRadioItem);
