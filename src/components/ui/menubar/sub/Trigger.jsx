'use client';

import { SubTrigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { triggerVariants } from '../Trigger';

const MenubarSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(triggerVariants(), 'font-normal', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubTrigger);
