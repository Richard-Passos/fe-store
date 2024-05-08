'use client';

import { Root } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { cn } from '@/utils';

const Accordion = ({ className, variant, ...props }, ref) => {
  return (
    <Box
      asChild
      className={cn('w-full p-0', className)}
      ref={ref}
      {...props}
    >
      <Root
        collapsible={true}
        type={variant}
        {...props}
      />
    </Box>
  );
};

export default forwardRef(Accordion);
