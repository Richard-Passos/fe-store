import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { cn } from '@/utils';

const Card = ({ className, asChild, children, idx, ...props }, ref) => {
  return (
    <Box
      asChild
      className={cn('max-w-72 grow basis-60', className)}
      ref={ref}
      {...props}
    >
      {!asChild ? <li>{children}</li> : children}
    </Box>
  );
};

export default forwardRef(Card);
