'use client';

import { SubTrigger } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItem } from '../variants';

const ContextMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={contextMenuItem({
        color,
        className: cn('data-open:bg-active', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubTrigger);
