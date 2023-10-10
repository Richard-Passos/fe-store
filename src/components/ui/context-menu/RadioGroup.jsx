'use client';

import { RadioGroup } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuRadioGroup = ({ className, ...props }, ref) => {
  return (
    <RadioGroup
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuRadioGroup);
