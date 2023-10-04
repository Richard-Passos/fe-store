import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardDescription = ({ className, ...props }, ref) => {
  return (
    <p
      className={cn('text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardDescription);
