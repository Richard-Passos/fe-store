import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardActions = ({ className, ...props }, ref) => {
  return (
    <section
      className={cn('flex items-center justify-end gap-xs', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardActions);
