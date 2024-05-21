'use client';

import { Content } from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TooltipContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        '[--tooltip-content-available-h:--radix-tooltip-content-available-height] [--tooltip-content-available-w:--radix-tooltip-content-available-width] [--tooltip-content-transform-origin:--radix-tooltip-content-transform-origin] [--tooltip-trigger-h:--radix-tooltip-trigger-height] [--tooltip-trigger-w:--radix-tooltip-trigger-width]',
        className
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(TooltipContent);
