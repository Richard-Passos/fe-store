'use client';

import { SubContent } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(
        '[--context-menu-content-available-h:--radix-context-menu-content-available-height] [--context-menu-content-available-w:--radix-context-menu-content-available-width] [--context-menu-content-transform-origin:--radix-context-menu-content-transform-origin] [--context-menu-trigger-h:--radix-context-menu-trigger-height] [--context-menu-trigger-w:--radix-context-menu-trigger-width]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubContent);
