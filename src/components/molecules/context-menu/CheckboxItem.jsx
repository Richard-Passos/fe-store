'use client';

import { CheckboxItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItem } from './variants';

const ContextMenuCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={contextMenuItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuCheckboxItem);
