'use client';

import { SubTrigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { itemVariants } from '../Item';

const MenubarSubTrigger = ({ className, ...props }, ref) => {
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

export default forwardRef(MenubarSubTrigger);
