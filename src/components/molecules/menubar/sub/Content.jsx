'use client';

import { SubContent } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarContent } from '../variants';

const MenubarSubContent = ({ color, className, ...props }, ref) => {
  return (
    <SubContent
      className={menubarContent({
        color,
        className: cn('min-w-[8rem] shadow-lg', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubContent);
