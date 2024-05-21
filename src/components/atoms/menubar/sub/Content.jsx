'use client';

import { SubContent } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(
        '[--menubar-content-available-h:--radix-menubar-content-available-height] [--menubar-content-available-w:--radix-menubar-content-available-width] [--menubar-content-transform-origin:--radix-menubar-content-transform-origin] [--menubar-trigger-h:--radix-menubar-trigger-height] [--menubar-trigger-w:--radix-menubar-trigger-width]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubContent);
