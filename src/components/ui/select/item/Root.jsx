'use client';

import { Item } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-4 text-sm text-muted-content outline-none focus:bg-muted focus:text-content data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(SelectItem);
