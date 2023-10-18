'use client';

import { Content } from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const HoverCardContent = ({ className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={cn(
        'z-50 w-80 max-w-[--radix-popper-available-width] rounded-md border bg-main p-4 text-muted-content shadow-md data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(HoverCardContent);
