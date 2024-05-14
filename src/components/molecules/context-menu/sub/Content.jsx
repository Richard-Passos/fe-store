'use client';

import { SubContent } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuContent } from '../variants';

const ContextMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={contextMenuContent({
        color,
        className: cn('min-w-[8rem] shadow-lg', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubContent);
