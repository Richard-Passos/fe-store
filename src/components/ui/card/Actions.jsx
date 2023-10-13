import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardActions = ({ className, ...props }, ref) => {
  return (
    <section
      className={cn('flex items-center', className)}
      label='Actions'
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardActions);
