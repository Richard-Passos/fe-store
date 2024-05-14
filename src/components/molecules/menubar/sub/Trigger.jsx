'use client';

import { SubTrigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItem } from '../variants';

const MenubarSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={menubarItem({
        color,
        className: cn('data-open:bg-active', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubTrigger);
