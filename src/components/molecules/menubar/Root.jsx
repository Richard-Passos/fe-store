'use client';

import { Root } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { cn } from '@/utils';

const Menubar = ({ className, asChild, children, ...props }, ref) => {
  return (
    <Box
      className={cn('flex-row items-center p-1', className)}
      ref={ref}
      {...props}
    >
      <Root asChild={asChild}>{children}</Root>
    </Box>
  );
};

export default forwardRef(Menubar);
