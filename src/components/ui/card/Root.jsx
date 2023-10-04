import { forwardRef } from 'react';

import { cn } from '@/utils';

const Card = ({ className, ...props }, ref) => {
  return (
    <article
      className={cn(
        'rounded-lg border bg-muted text-content shadow-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Card);
