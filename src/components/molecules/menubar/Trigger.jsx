'use client';

import { Trigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const MenubarTrigger = ({ color, className, ...props }, ref) => {
  return (
    <Trigger
      className={button({
        color,
        variant: 'solid',
        size: 'xs',
        className: cn('text-sm data-open:bg-active', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarTrigger);
