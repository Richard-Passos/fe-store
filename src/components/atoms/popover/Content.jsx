'use client';

import { Content } from '@radix-ui/react-popover';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const PopoverContent = ({ color, variant, className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={cn(
        '[--popover-content-available-h:--radix-popover-content-available-height] [--popover-content-available-w:--radix-popover-content-available-width] [--popover-content-transform-origin:--radix-popover-content-transform-origin] [--popover-trigger-h:--radix-popover-trigger-height] [--popover-trigger-w:--radix-popover-trigger-width]',
        className
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(PopoverContent);
