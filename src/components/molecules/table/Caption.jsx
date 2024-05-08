import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableCaption = ({ className, ...props }, ref) => {
  return (
    <caption
      className={cn('mt-4 text-sm text-content/75', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableCaption);
