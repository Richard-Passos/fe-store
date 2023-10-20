'use client';

import { Trigger } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const NavigationMenuTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(triggerVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const triggerVariants = cnv({
  base: 'group inline-flex h-10 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50 data-open:bg-muted',
});

export default forwardRef(NavigationMenuTrigger);
export { triggerVariants };
