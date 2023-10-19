'use client';

import { SubTrigger } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from '../Item';

const ContextMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(
        itemVariants(),
        'data-open:bg-muted data-open:text-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubTrigger);
