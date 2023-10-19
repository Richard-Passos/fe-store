'use client';

import { Trigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import { itemVariants } from './Item';

const MenubarTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(triggerVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const triggerVariants = cnv({
  base: itemVariants({
    className: 'font-medium data-open:bg-muted data-open:text-content',
  }),
});

export default forwardRef(MenubarTrigger);
export { triggerVariants };
