import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardHeader = ({ className, ...props }, ref) => {
  return (
    <header
      className={cn('space-y-1.5', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardHeader);
