'use client';

import { Root } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { cn } from '@/utils';

const Accordion = ({ className, mode, children, ...props }, ref) => {
  return (
    <Box
      asChild
      className={cn('w-full p-0', className)}
      ref={ref}
      {...props}
    >
      <Root type={mode}>{children}</Root>
    </Box>
  );
};

export default forwardRef(Accordion);
