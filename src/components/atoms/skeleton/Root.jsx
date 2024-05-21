import { forwardRef } from 'react';

import { cn } from '@/utils';

const Skeleton = ({ className, ...props }, ref) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-active', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Skeleton);
