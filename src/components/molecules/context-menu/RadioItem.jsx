'use client';

import { RadioItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItem } from './variants';

const ContextMenuRadioItem = ({ color, className, ...props }, ref) => {
  return (
    <RadioItem
      className={contextMenuItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuRadioItem);
