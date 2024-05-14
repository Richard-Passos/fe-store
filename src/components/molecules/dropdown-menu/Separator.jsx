'use client';

import { Separator as RadixSeparator } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { Separator } from '@/components/atoms';

const DropdownMenuSeparator = (
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

export default forwardRef(DropdownMenuSeparator);
