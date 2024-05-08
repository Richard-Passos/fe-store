import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardContent = ({ className, ...props }, ref) => {
  return (
    <section
      aria-label='Content'
      className={cn('flex flex-col', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardContent);
