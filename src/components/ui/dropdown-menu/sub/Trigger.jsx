'use client';

import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from '../Item';

const DropdownMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(
        itemVariants(),
        'data-open:bg-muted [&>svg]:h-4 [&>svg]:w-4',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubTrigger);
