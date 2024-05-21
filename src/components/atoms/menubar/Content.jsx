'use client';

import { Content } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarContent = ({ className, ...props }, ref) => {
  return (
    <Content
      align='start'
      className={cn(
        '[--menubar-content-available-h:--radix-menubar-content-available-height] [--menubar-content-available-w:--radix-menubar-content-available-width] [--menubar-content-transform-origin:--radix-menubar-content-transform-origin] [--menubar-trigger-h:--radix-menubar-trigger-height] [--menubar-trigger-w:--radix-menubar-trigger-width]',
        className
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(MenubarContent);
