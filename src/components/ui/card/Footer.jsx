import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardFooter = ({ className, ...props }, ref) => {
  return (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardFooter);
