'use client';

import { SubContent } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contentVariants } from '../Content';

const ContextMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(contentVariants(), 'rounded-sm', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubContent);
