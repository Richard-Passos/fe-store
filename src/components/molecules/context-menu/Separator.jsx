'use client';

import { Separator as RadixSeparator } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { Separator } from '@/components/atoms';

const ContextMenuSeparator = (
  { className, asChild, children, ...props },
  ref
) => {
  return (
    <Separator
      asChild
      ref={ref}
      {...props}
    >
      <RadixSeparator asChild={asChild}>{children}</RadixSeparator>
    </Separator>
  );
};

export default forwardRef(ContextMenuSeparator);
