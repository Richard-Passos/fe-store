'use client';

import { CheckboxItem } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItem } from './variants';

const MenubarCheckboxItem = ({ color, className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={menubarItem({
        color,
        className: cn('relative pl-8', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarCheckboxItem);
