'use client';

import { Content } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={cn(
        '[--select-content-available-h:--radix-select-content-available-height] [--select-content-available-w:--radix-select-content-available-width] [--select-content-transform-origin:--radix-select-content-transform-origin] [--select-trigger-h:--radix-select-trigger-height] [--select-trigger-w:--radix-select-trigger-width]',
        className
      )}
      position='popper'
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(SelectContent);
