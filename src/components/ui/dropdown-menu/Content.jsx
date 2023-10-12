'use client';

import { Content } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const DropdownMenuContent = ({ className, sideOffset = 8, ...props }, ref) => {
  return (
    <Content
      className={cn(contentVariants(), className)}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

const contentVariants = cnv({
  base: 'z-50 min-w-[8rem] overflow-hidden rounded-md border border-muted-content/50 bg-base p-1 text-content shadow-md data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

export default forwardRef(DropdownMenuContent);
export { contentVariants };
