'use client';

import { CommandItem as Item } from 'cmdk';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const CommandItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={button({
        color: 'inherit',
        variant: 'solid',
        size: 'sm',
        className: cn(
          'flex select-none justify-start border-none transition-none aria-selected:bg-active',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandItem);
