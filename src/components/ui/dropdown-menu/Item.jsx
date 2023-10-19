'use client';

import { Item } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const DropdownMenuItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(itemVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const itemVariants = cnv({
  base: 'flex cursor-default select-none items-center gap-2 rounded-sm px-4 py-1.5 text-sm text-muted-content outline-none focus:bg-muted focus:text-content data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:h-3.5 [&>svg]:w-3.5',
});

export default forwardRef(DropdownMenuItem);
export { itemVariants };
