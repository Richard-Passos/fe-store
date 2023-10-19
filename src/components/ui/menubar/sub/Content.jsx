'use client';

import { SubContent } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contentVariants } from '../Content';

const MenubarSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(contentVariants(), 'shadow-lg', className)}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubContent);
