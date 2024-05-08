import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardHeader = ({ className, ...props }, ref) => {
  return (
    <header
      className={cn('flex flex-col', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardHeader);
