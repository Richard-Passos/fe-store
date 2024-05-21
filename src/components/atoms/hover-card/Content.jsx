'use client';

import { Content } from '@radix-ui/react-hover-card';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const HoverCardContent = ({ className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={cn(
        '[--hover-card-content-available-h:--radix-hover-card-content-available-height] [--hover-card-content-available-w:--radix-hover-card-content-available-width] [--hover-card-content-transform-origin:--radix-hover-card-content-transform-origin] [--hover-card-trigger-h:--radix-hover-card-trigger-height] [--hover-card-trigger-w:--radix-hover-card-trigger-width]',
        className
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(HoverCardContent);
