'use client';

import { Separator as RadixSeparator } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { Separator } from '@/components/atoms';

const MenubarSeparator = ({ asChild, children, ...props }, ref) => {
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

export default forwardRef(MenubarSeparator);
