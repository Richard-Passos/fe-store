import { forwardRef } from 'react';

import { cn } from '@/utils';

const CardContent = ({ className, ...props }, ref) => {
  return (
    <section
      className={cn('p-6 pt-0', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardContent);
