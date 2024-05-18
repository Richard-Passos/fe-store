'use client';

import { Item } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const SelectItem = ({ color, size, className, ...props }, ref) => {
  return (
    <Item
      className={button({
        color,
        variant: 'solid',
        size,
        className: cn(
          'flex select-none justify-start border-none transition-none focus-visible:outline-0',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(SelectItem);
