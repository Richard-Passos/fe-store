'use client';

import { RadioItem } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItem } from './variants';

const MenubarRadioItem = ({ color, className, ...props }, ref) => {
  return (
    <RadioItem
      className={menubarItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarRadioItem);
